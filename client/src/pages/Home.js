import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Home = () => {
	const [data,setData]=useState({name:'',email:''})
	const navigate=useNavigate()
	function signIn()
	{
		return navigate('/signin')
	}
	function logIn()
	{
		return navigate('/')
	}
	async function checkLogin()
	{
		try {
			const res=await axios.get('/home',{
				headers: {
					'token': localStorage.getItem('token'),
				},
			})
			const userData=res.data.message
			console.log(userData)
			setData({...data,name:userData.name,email:userData.email})
			
		} catch (error) {
			console.log(error)
		}
		
	}
	useEffect(()=>
	{
		checkLogin()

	},[])
	// [] means only one time run useEffect . if you not used [] then its run infinit
	return (
	<>
	
	<div className="container mt-5 ">
<div className="row justify-content-around text-center">
	<div className="col-8 ms-3">
	<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome {data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.email}</Card.Subtitle>
        <Card.Text>
          hellow, Welcome to my small website
        </Card.Text>
        {/* <Card.Link href="#">goToLogin</Card.Link> */}
		<button type="button" className="btn btn-primary but mt-3" onClick={ logIn}>goToLogin</button>
		<button type="button" className="btn btn-primary but mt-3" onClick={ signIn}>goToResister</button>

        {/* <Card.Link href="#">goToResister</Card.Link> */}
      </Card.Body>
    </Card>
	</div>
</div>
	
	
	</div>
	</>
	)
}

export default Home
