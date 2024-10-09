import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const COLD_URL = "https://media.istockphoto.com/id/1252711563/photo/green-hills-of-lonavala-shot-during-the-rainy-season.webp?b=1&s=170667a&w=0&k=20&c=yDQJ4_PgGBZ0Q9r_zaqO_B04KgmyCuFgPIin1Od6hHY=";
    const HOT_URL = "https://media.istockphoto.com/id/1792317398/photo/the-morning-sky-looks-like-a-bright-golden-and-blue-purple-sky.jpg?s=612x612&w=0&k=20&c=VTkmH3uqliY_J_38jUzBVcRYnQp8slYbMagS0W0ci14=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"} >
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>max Temp = {info.tempMax}&deg;C</p>
                            <p>The weatehr can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>


                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}