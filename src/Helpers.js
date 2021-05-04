//Receive article id and return the complete required url to fetch that article
export const build_article_url = (id) => {
    return "https://newsfilter.io/articles/"+id;
}

export const return_random_array = (obj) => {
    const randomIndex = Math.floor(Math.random() * obj.length);
   return obj[randomIndex];
}

export const truncate_string= (str,max_length) => {
    if(str.length > max_length){
        return str.substring(0,max_length)+"....";
    }
    return str;
}