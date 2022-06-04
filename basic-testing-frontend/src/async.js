export const promise = (value) =>
  new Promise((resolve, reject) => {
    if (typeof value === 'string') {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    }
  });

promise('good promise!!').then(console.log).catch(console.error);
