import api from "../src/services/api";

const evideovslPlayer = document.querySelector("iframe");
const evideoVslContainer = document.getElementById("evideovsl-player");
const [player, idVideo] = evideovslPlayer.src.split("?video=");

const getInfoVideo = async (data) => {
  const res = await api.getInfoVideo(data);

  return res;
};

const GetVideoInfo = async () => {
  const videoInfo = await getInfoVideo(idVideo);
  return videoInfo;
};

const videoInfo = GetVideoInfo();

videoInfo.then((videoInfo) => {
  const infoVideo = videoInfo.response;

  console.log(infoVideo);

  if (videoInfo.message === "Não foi possível carregar o vídeo") {
    evideoVslContainer.style.padding = "56.25%";
  }

  if (infoVideo.haveBorder) {
    evideoVslContainer.style.outline = `3px solid ${infoVideo.borderColor}`;
  }

  if (infoVideo.haveBorderRadius) {
    evideoVslContainer.style.borderRadius = "12px";
  }
});
