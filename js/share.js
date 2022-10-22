const url = "https://wmc-pbti.netlify.app/";

function setShare(){
  var resultImg = document.querySelector("#resultImg");
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = "웨민 PBTI 결과";
  const shareDesc = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.API.request({
    url: '/v1/api/talk/friends/message/default/send',
    data: {
      receiver_uuids: ['${RECEIVER_UUID}'],
      template_object: {
        object_type: 'feed',
        content: {
          title: shareTitle,
          description: shareDesc,
          image_url:
            shareImage,
          link: {
            web_url: shareURL,
            mobile_web_url: shareURL,
          },
        },

        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobile_web_url: shareURL,
              web_url: shareURL,
            },
          },
        ],
      },
    },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}