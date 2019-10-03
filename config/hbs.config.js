module.exports = {
    extname: 'hbs',
    defaultView: 'splash',
    layoutsDir: './views/layouts/',
    partialsDir: './views/partials/',

    helpers: {
        getMenu: () => {

            // const traer = async () => {
            //     const response = await fetch('http://www.recipepuppy.com/api/?i=potato', { mode: 'cors' })

            //     let data = await response.json();
            //     data = data.results
            //     data = data.slice(data.length - 20)
            //     console.log(data);
            //     return data
            // }

            // let mydata;

            // traer().then(data => mydata = data)
            let data = [{ "description": "no description yet", "stock": 5, "price": 2000, "_id": "5d7328917b8add0866126ab5", "itemId": "s1", "productName": "salchipapa sencilla", "__v": 0 }, { "description": "no description yet", "stock": 2, "price": 5000, "_id": "5d7337a7b37bf10e6eb47bf3", "itemId": "s2", "productName": "salchipapa especial", "__v": 0 }, { "description": "no description yet", "stock": 3, "price": 8000, "_id": "5d7337a7b37bf10e6eb47bf5", "itemId": "s4", "productName": "mandipapa especial", "__v": 0 }, { "description": "no description yet", "stock": 3, "price": 4000, "_id": "5d7337a7b37bf10e6eb47bf4", "itemId": "s3", "productName": "mandipapa sencilla", "__v": 0 }];
            console.log(data);

            return data

        },

        getTwice: (num) => num * 2
    }
}