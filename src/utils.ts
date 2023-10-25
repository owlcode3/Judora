export const IO = (item: Element, options: IntersectionObserverInit | undefined) => {
   return new Promise<void>(resolve => {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               resolve();
            }
         });
      }, options);

      // Start observing the target element
      observer.observe(item);
   });
};
