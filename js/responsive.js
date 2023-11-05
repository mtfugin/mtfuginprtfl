 const detectDeviceType = () => {
      const userAgent = navigator.userAgent;
      if (/Mobile/.test(userAgent)) {
        document.body.classList.add('mobile');
      } else if (/Tablet/.test(userAgent)) {
        document.body.classList.add('tablet');
      } else {
        document.body.classList.add('desktop');
      }
    };
    detectDeviceType();
