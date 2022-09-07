import React from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export const DonationsPage = () => {
    return (
        <div>
            <Header/>

            <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">   
             <input type="hidden" name="receiver" value="4100117959258950"/>   
             <input type="input" name="formcomment" value=" синтеза"></input>
             <input type="hidden" name="short-dest" value="ядерного синтеза"/>   
              <input type="hidden" name="label" value="$order_id"/>   
              <input type="hidden" name="quickpay-form" value="donate"/>    
              <input type="hidden" name="targets" value="транзакция {order_id}"/>  
                <input type="number" name="sum" value="4568.25" data-type="number"/>   
                       <label><input type="radio" name="paymentType" value="PC"/>ЮMoney</label>   
              <label><input type="radio" name="paymentType" value="AC"/>Банковской картой</label>
             <input type="submit" value="Перевести"/>
            </form>

            <Footer/>
        </div>
    );
}


