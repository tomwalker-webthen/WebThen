function createArchiveLoadingArt(){
 const art=node('div','os-loading-art');art.setAttribute('aria-hidden','true');
 const folders='<span class="loading-folder folder-left"></span><span class="loading-paper paper-one"></span><span class="loading-paper paper-two"></span><span class="loading-paper paper-three"></span><span class="loading-folder folder-right"></span>';
 art.innerHTML='<div class="loading-theme loading-win98">'+folders+'</div><div class="loading-theme loading-xp">'+folders+'<span class="loading-progress"></span></div><div class="loading-theme loading-classic"><span class="loading-watch"><i></i><b></b></span></div><div class="loading-theme loading-aqua"><span class="loading-colorwheel"></span></div><div class="loading-theme loading-modern"><span class="loading-ring"></span></div>';
 return art;
}
