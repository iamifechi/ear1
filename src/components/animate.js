const animate=()=>{
    let scroll;
    window.onscroll=()=>{
      console.log('fans scroll',window.scrollY);
      scroll = window.scrollY;
    }
    return scroll;
  }

export default animate