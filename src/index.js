import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App />
    </>
)

{/* <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('productName')} className={styles.textbox} type="text" placeholder='productName*' />
                            <input {...formik.getFieldProps('productBrand')} className={styles.textbox} type="text" placeholder='productBrand*' />
                            <input {...formik.getFieldProps('productType')} className={styles.textbox} type="text" placeholder='productType*' />
                            <input {...formik.getFieldProps('productSize')} className={styles.textbox} type="text" placeholder='productSize*' />
                            <input {...formik.getFieldProps('ProductStock')} className={styles.textbox} type="text" placeholder='ProductStock*' />
                            <input {...formik.getFieldProps('productPrice')} className={styles.textbox} type="text" placeholder='productPrice*' />
                            <button className={styles.btn} type='submit'>Add Item</button>
                        </div> */}