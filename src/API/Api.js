

const Api = () => {
       

      const getSectionArtigos = async (section) => { // recebe a seção
        const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=lTj6LO5Y6a79PmUcJMukzeaAAN2TFBzs`);
        setNoticias(res.data.results);
      };

    };

export default Api;