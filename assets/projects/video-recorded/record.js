const d = document,
  w = window,
  n = navigator;
w.onload = function () {
  const parts = [];
  let mediaRecorder;
  n.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
    d.getElementById("video").srcObject = stream;
    d.getElementById("btn").onclick = function () {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start(1000);
      mediaRecorder.ondataavailable = function (e) {
        parts.push(e.data);
      };
    };
  });
  d.getElementById("stopbtn").onclick = function () {
    mediaRecorder.stop();
    const blob = new Blob(parts, {
      type: "video/webm",
    });
    const url = URL.createObjectURL(blob);
    const a = d.createElement("a");
    d.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.download = "test.mp4";
    a.click();
  };
};

