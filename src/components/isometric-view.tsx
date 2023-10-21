
function IsometricView() {
  return (
    <div className="px-9 py-2">
      <div className="relative">
        <img src="/iv-img.png" alt="iv img" />
        <div className="absolute bottom-0 w-full text-[1.95rem] h-[4.6rem] font-semibold text-white bg-[#394A92] text-center flex items-center justify-center">
          ISOMETRIC VIEW OF SEWAGE TREATMENT PLANT
        </div>
      </div>
      <p className="font-normal text-white text-[.94rem] mt-7">
        Primary treatment consists of temporarily holding the sewage in screen Basket where heavy solids can settle to the bottom while oil, grease and lighter solids float to the surface. The settled and floating materials are removed and the remaining liquid may be discharged or subjected to secondary treatment. Some sewage treatment plants that are connected to a combined sewer system have a bypass arrangement after the primary treatment unit. This means that during very heavy rainfall events, the secondary and tertiary treatment systems can be bypassed to protect them from hydraulic overloading, and the mixture of sewage and storm water only receives primary treatment Secondary treatment removes dissolved and suspended biological matter. Secondary treatment is typically performed by indigenous, water-borne micro-organisms in a managed habitat. Secondary treatment may require a separation process to remove the micro-organisms from the treated water prior to discharge or tertiary treatment. Tertiary treatment is sometimes defined as anything more than primary and secondary treatment in order to allow ejection into a highly sensitive or fragile ecosystem (estuaries, low-flow rivers, coral reefs...). Treated water is sometimes disinfected chemically or physically prior to discharge into a stream.
      </p>
    </div>
  )
}

export default IsometricView