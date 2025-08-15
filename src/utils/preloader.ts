export interface PreloadOptions {
  images?: string[];
  fonts?: string[];
  timeout?: number;
}

export interface PreloadResult {
  success: boolean;
  loadedImages: number;
  loadedFonts: number;
  totalImages: number;
  totalFonts: number;
  errors: string[];
}

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

const preloadFont = (fontPath: string, fontFamily: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const font = new FontFace(fontFamily, `url(${fontPath})`);
    font.load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
        resolve();
      })
      .catch(() => reject(new Error(`Failed to load font: ${fontPath}`)));
  });
};

export const preloadAssets = async (
  options: PreloadOptions, 
  onProgress?: (loaded: number, total: number) => void
): Promise<PreloadResult> => {
  const { images = [], fonts = [], timeout = 10000 } = options;
  const result: PreloadResult = {
    success: false,
    loadedImages: 0,
    loadedFonts: 0,
    totalImages: images.length,
    totalFonts: fonts.length,
    errors: []
  };

  const totalAssets = images.length + fonts.length;
  let loadedAssets = 0;

  const updateProgress = () => {
    loadedAssets++;
    if (onProgress) {
      onProgress(loadedAssets, totalAssets);
    }
  };

  const allPromises: Promise<void>[] = [];

  images.forEach(src => {
    const promise = preloadImage(src)
      .then(() => { 
        result.loadedImages++; 
        updateProgress();
      })
      .catch(error => { 
        result.errors.push(error.message); 
        updateProgress();
      });
    allPromises.push(promise);
  });

  fonts.forEach((fontPath, index) => {
    const fontFamily = `preloaded-font-${index}`;
    const promise = preloadFont(fontPath, fontFamily)
      .then(() => { 
        result.loadedFonts++; 
        updateProgress();
      })
      .catch(error => { 
        result.errors.push(error.message); 
        updateProgress();
      });
    allPromises.push(promise);
  });

  const timeoutPromise = new Promise<void>((_, reject) => {
    setTimeout(() => reject(new Error('Preload timeout')), timeout);
  });

  try {
    await Promise.race([
      Promise.allSettled(allPromises),
      timeoutPromise
    ]);
    result.success = result.errors.length === 0;
  } catch (error) {
    result.errors.push('Preload operation timed out');
    result.success = false;
  }

  return result;
};

export const getAllImagePaths = (): string[] => {
  const imagePaths: string[] = [];
  
  const cycloImages = [
    '/src/assets/images/cyclo/categorypage.png',
    '/src/assets/images/cyclo/checkou1.png',
    '/src/assets/images/cyclo/checkout2.png',
    '/src/assets/images/cyclo/checkout3.png',
    '/src/assets/images/cyclo/cyclocover.png',
    '/src/assets/images/cyclo/cyclohero1.png',
    '/src/assets/images/cyclo/cyclohero2.png',
    '/src/assets/images/cyclo/landingpage.png',
    '/src/assets/images/cyclo/productpage.png',
    '/src/assets/images/cyclo/support1.png',
    '/src/assets/images/cyclo/support2.png',
    '/src/assets/images/cyclo/user1.png',
    '/src/assets/images/cyclo/user2.png',
    '/src/assets/images/cyclo/wireframing.png'
  ];

  const pagrImages = [
    '/src/assets/images/pagr/branding.png',
    '/src/assets/images/pagr/community1.png',
    '/src/assets/images/pagr/community2.png',
    '/src/assets/images/pagr/community3.png',
    '/src/assets/images/pagr/filters.png',
    '/src/assets/images/pagr/homensearch1.png',
    '/src/assets/images/pagr/homensearch2.png',
    '/src/assets/images/pagr/homensearch3.png',
    '/src/assets/images/pagr/homensearch4.png',
    '/src/assets/images/pagr/map1.png',
    '/src/assets/images/pagr/map2.png',
    '/src/assets/images/pagr/map3.png',
    '/src/assets/images/pagr/pagrcover.png',
    '/src/assets/images/pagr/pagrwireframes.png',
    '/src/assets/images/pagr/pfp1.png',
    '/src/assets/images/pagr/pfp2.png',
    '/src/assets/images/pagr/pfp3.png',
    '/src/assets/images/pagr/profile1.png',
    '/src/assets/images/pagr/profile2.png',
    '/src/assets/images/pagr/profile3.png'
  ];

  const webappImages = [
    '/src/assets/images/webapp/compact home.png',
    '/src/assets/images/webapp/flashcards.png',
    '/src/assets/images/webapp/notedexpanded.png',
    '/src/assets/images/webapp/quiz.png',
    '/src/assets/images/webapp/subscriberhome.png',
    '/src/assets/images/webapp/webappcover.png',
    '/src/assets/images/webapp/webapphero1.png',
    '/src/assets/images/webapp/webapphero2.png'
  ];

  const websiteImages = [
    '/src/assets/images/website/institutions.png',
    '/src/assets/images/website/lp1.png',
    '/src/assets/images/website/lp2.png',
    '/src/assets/images/website/lp3.png',
    '/src/assets/images/website/lp4.png',
    '/src/assets/images/website/oldsite.png',
    '/src/assets/images/website/snapshot.png',
    '/src/assets/images/website/websitecover.png',
    '/src/assets/images/website/websitehero1.png',
    '/src/assets/images/website/websitehero2.png'
  ];

  const generalImages = [
    '/src/assets/images/bg3.png',
    '/src/assets/images/blue1.png',
    '/src/assets/images/blue2.png',
    '/src/assets/images/me.jpg',
    '/src/assets/images/mobblue1.png',
    '/src/assets/images/websiterevampcover.png',
    '/src/assets/me.png'
  ];

  imagePaths.push(...cycloImages, ...pagrImages, ...webappImages, ...websiteImages, ...generalImages);
  return imagePaths;
};

export const getAllFontPaths = (): string[] => {
  return [
    '/src/assets/fonts/fonnts.com-Neulis_Cursive_Regular.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Cursive_Medium.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Cursive_Bold.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Neue_Regular.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Neue_Medium.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Neue_Bold.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Sans_Regular.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Sans_Medium.otf',
    '/src/assets/fonts/fonnts.com-Neulis_Sans_Bold.otf'
  ];
};