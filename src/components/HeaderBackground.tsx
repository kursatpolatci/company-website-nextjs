
export default function HeaderBackground ( { text } : { text : string }) {
  return (
    <div>
      <div className="w-full h-96 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${'https://innovative-confidence-c13676fd50.media.strapiapp.com/header_background_8ef307c94b.png'})`,  
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' 
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex align-items-center justify-center">
          <h1 className="text-white text-xl position-relative sm:text-2xl uppercase relative top-7 font-semibold tracking-wider">{text}</h1>
        </div>
      </div>
    </div>
  );
}
