export const IO = (item: Element, options: IntersectionObserverInit | undefined) => {
   return new Promise(resolve => {
      const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               resolve(entry.target);
               // Stop observing once the target is intersecting
               observer.unobserve(entry.target);
            }
         });
      }, options);

      // Start observing the target element
      observer.observe(item);
   });
};
