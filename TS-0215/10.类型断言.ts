{
  const eBox = document.querySelector(".box");
  (eBox as HTMLElement).onclick = (e) => {
    
  }

  const iptElement = document.querySelector(".ipt");
  (iptElement as HTMLElement).onchange = (e) => {
    const val = ((e.target as HTMLInputElement).value);
  }
}