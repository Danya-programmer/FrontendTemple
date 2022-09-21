import {React, useState} from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import TextField from '@mui/material/TextField';
import './Donation.css'

export const DonationsPage = () => {
    const [value, setValue] = useState(300)
    return (
        <div>
            <Header/>
            <div >
                <div className="form">
            <img src={require('../../images/donations/fon-img.jpg')} alt="" className='ImgMain' />
            <div className="formMain">
                <div className="donateTitle">Пожертвования</div>
                <TextField type="number" name="sum" onChange={e => setValue(e.target.value)} value={value} data-type="number" 
          label="Сумма:"
          className='donateNumberForm'
        />
            
            <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">   
            <input type="hidden" name="receiver" value="4100117959258950"/>  
                <input type="hidden" name="label" value="$order_id"/>   
                <input type="hidden" name="quickpay-form" value="donate"/>   
                <input type="hidden" name="targets" value="транзакция {order_id}"/>    
                <input type="hidden" name="sum" value={value} data-type="number"/>         
                <button type="submit" className="donate-main-button" >
                    <p className="main-button-text">Пожертвовать</p>
                </button>
            </form>
            </div>
            </div>
            </div>
            
            
            <Footer/>
        </div>
    );
}


