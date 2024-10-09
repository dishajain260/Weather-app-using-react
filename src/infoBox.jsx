import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./infoBox.css"
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1575214997383-a3592741c334?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    
    return (
        <div className="InfoBox">
          
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Mintemp={info.tempMin}&deg;C</p>
        <p>Maxtemp={info.tempMax}&deg;C</p>
        <p>The weather can be described as <i> {info.weather} </i>and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
   
    </Card>
            </div>
            
        </div>
    )
}