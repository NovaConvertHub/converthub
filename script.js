async function convertTextToAudio() {
  const text = document.getElementById("text-input").value;
  if (!text) {
    alert("Please enter some text!");
    return;
  }

  // Send text to backend
  const response = await fetch("/text-to-audio", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    alert("Something went wrong!");
    return;
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const downloadLink = document.getElementById("audio-download");
  downloadLink.href = url;
  downloadLink.style.display = "inline"; // show download link
}
