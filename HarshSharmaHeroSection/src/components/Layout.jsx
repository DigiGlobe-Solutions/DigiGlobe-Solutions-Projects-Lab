function Layout({children}) {
  return (
    <div className="h-[full] w-full bg-black flex flex-col items-center justify-center overflow-hidden py-20">
      <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.07] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
        </div>
    </div>
  )
}

export default Layout