
//const employees =
(async () => {
    const $ = selector => document.querySelector(selector);
    /*
   */
    const response = await fetch('http://www.recipepuppy.com/api/?i=potato', { mode: 'cors' })

    let data = await response.json();
    data = data.results
    data = data.slice(data.length - 20)
    // let data = DATA.results
    console.log(data);


    const template = {}
    let container = $('#employees_container')

    template.raw = $('#myTemplate').innerHTML;
    template.compiled = Handlebars.compile(template.raw)
    template.html = template.compiled({ data })

    container.innerHTML = template.html
})()

