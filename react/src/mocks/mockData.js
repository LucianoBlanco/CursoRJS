const products = [
    {
      id: '01',
      name: 'random1',
      price: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://picsum.photos/200',
      stock: 5,
      category: 'nuevos',
    },
    {
      id: '02',
      name: 'random2',
      price: 90,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://picsum.photos/201',
      stock: 15,
      category: 'oferta',
    },
    {
      id: '03',
      name: 'random3',
      price: 150,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://picsum.photos/202',
      stock: 7,
      category: 'masvendidos',
    },
    {
      id: '04',
      name: 'random4',
      price: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://picsum.photos/203',
      stock: 3,
      category: 'nuevos',
    },
    {
      id: '05',
      name: 'random5',
      price: 95,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://picsum.photos/204',
      stock: 10,
      category: 'oferta',
    },
    {
      id: '06',
      name: 'random6',
      price: 70,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://picsum.photos/205',
      stock: 4,
      category: 'masvendidos',
    },
    {
      id: '07',
      name: 'random7',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      img: 'https://i.postimg.cc/15RTH684/118283916-b19c5a1f-162b-410b-8169-f58f0d153752.jpg',
      stock: 4,
      category: 'nuevos',
    },
  ];
  
  export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true;
    setTimeout(() => {
      if (condition) {
        resolve(products);
      } else {
        reject('salio mal :(');
      }
    }, 3000);
  });
  