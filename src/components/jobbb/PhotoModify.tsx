import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";

import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import { useEffect, useRef, useState } from "react";

// 오른쪽 코드 가져오기

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

function PhotoModify() {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [width, setWidth] = useState<number | undefined>(100);
  const [height, setHeight] = useState<number | undefined>(140);
  const [cropImg, setCropImg] = useState<any>(null);
  // const [pointRegion, setPointRegion] = useState<any>(null);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () => setImgSrc(reader.result?.toString() || ""));
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: any) {
    if (aspect) {
      const { naturalWidth, naturalHeight } = e.target;
      setWidth(naturalWidth);
      setHeight(naturalHeight);
      setCropImg(e.target);
      setCrop(centerAspectCrop(naturalWidth, naturalHeight, aspect));
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      hiddenAnchorRef.current!.href = blobUrlRef.current;
      hiddenAnchorRef.current!.click();
    });
  }

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && cropImg && previewCanvasRef.current) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(cropImg, previewCanvasRef.current, completedCrop, scale);
      }
    },
    100,
    [completedCrop, scale]
  );

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else if (imgRef.current) {
      const { width, height } = imgRef.current;
      setAspect(16 / 9);
      setCrop(centerAspectCrop(width, height, 16 / 9));
    }
  }

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && !imgLoaded) {
      setImgLoaded(true);
    }
  }, [imgSrc, imgLoaded]);

  return (
    <div className={`${styles.photoModify}`}>
      <div className={`${styles.grayLinear}`}>
        <Image src={"https://job.hackers.com/A_offline/tool/images/pic_info.gif"} alt={"이용방법"} width="413" height="70" />
        <div className="flexRow ct">
          <Image src={"https://job.hackers.com/A_offline/tool/images/pic_01.gif"} alt={"1단계"} width="122" height="47" />
          <input type="file" className={styles.borderBox} accept="image/*" onChange={onSelectFile} />
        </div>
        <div className="flexRow ct">
          <Image src={"https://job.hackers.com/A_offline/tool/images/pic_02.gif"} alt={"2단계"} width="122" height="47" />
          <div className="flexRow">
            가로 <input type="number" className={styles.borderBox} defaultValue={width} /> 픽셀 / 세로{" "}
            <input type="number" className={styles.borderBox} defaultValue={height} /> 픽셀
          </div>
        </div>
        <div className="flexRow">
          <Image src={"https://job.hackers.com/A_offline/tool/images/pic_03.gif"} alt={"3단계"} width="122" height="47" />
          <div>
            <div className="flexRow">
              <div className="originalWrap">
                원본사진
                <div className="original"></div>
              </div>
              <div className="originalWrap">
                편집된 사진
                <div className="previewArea"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="Crop-Controls">
          <div>
            <label htmlFor="scale-input">확대/축소: </label>
            <input
              id="scale-input"
              className={`${styles.borderBox}`}
              type="number"
              step="0.1"
              value={scale}
              disabled={!imgSrc}
              onChange={(e) => setScale(Number(e.target.value))}
            />
          </div>
          <div>
            <button onClick={handleToggleAspectClick}>[{aspect ? "자유조절" : "정비례"}로 전환]</button>
          </div>
        </div>
        {!!imgSrc && (
          <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={(c) => setCompletedCrop(c)} aspect={aspect}>
            <Image src={imgSrc} onLoad={onImageLoad} alt="Crop me" width={width} height={height} style={{ transform: `scale(${scale})` }} />
          </ReactCrop>
        )}
        {!!completedCrop && (
          <>
            <div>
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: "1px solid black",
                  objectFit: "contain",
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              />
            </div>
            <div>
              <button onClick={onDownloadCropClick}>
                <Image src={"https://job.hackers.com/A_offline/tool/images/btn_save_pic.gif"} alt="저장" width={135} height={29}></Image>
              </button>
              <a
                ref={hiddenAnchorRef}
                download
                style={{
                  position: "absolute",
                  top: "-200vh",
                  visibility: "hidden",
                }}
              >
                Hidden download
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PhotoModify;
