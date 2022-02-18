const Home = () => {

  // const apiConfig = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
  //   body: JSON.stringify(clientData),
  // };

  // try {
  //   const url = "http://127.0.0.1:3000";
  //   const res = await axios.get(`${url}/users`, clientData, apiConfig);
  //   console.log(res.data.user);
  //   if (res) setClientData(res.data.user);
  //   localStorage.setItem('clients_token', res.data.token);
  // } catch (error) {
  //   console.log(error);
  // }
  return (
    <>
      <h1 style={{ marginTop: '50px'}}>Home page</h1>
    </>
  )
}

export default Home;
