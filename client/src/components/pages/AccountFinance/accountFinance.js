import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AccountFinance() {
    const adminArray = [
        'Financial Database Management','Financial Statement & Management Report Preparation','Trial Balance Consolidation','Balance Sheet & Account Reconciliation','Month End Processes, including BAS','Payroll','Invoicing','Tax Return Preparation','Accounts Payable & Receivable','Financial Forecasting'
    ];
    return (
        <div className='adminSupportSection' id='accountFinance'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={8} className='adminSupportDiv01'>
                        <div>
                            <h1 className='adminSupportHeader01'>Accounting and Finance</h1>
                            <p className='adminSupportText01'> Struggling to keep on top of your finances? Leave it to the Beyond
                            team to expertly manage all aspects of your financial management.
                            With 10+ years’ experience, we’ll ensure that your financial
                            management is compliant and comprehensive through meticulous accounting processes and procedures.
                            <br />
                            Our Accounting and Finance services not only help you manage daily transactions, they help you plan for the future and ensure your business
                            is tax compliant. Our accounting and finance team can help you manage your database, prepare financial statements, invoice customers, pay employees, prepare your tax and more.
                            <br />
                            We’ll not only manage your daily, monthly and yearly accounting and financial requirements, we’ll also help you strategically manage your finances through forecasting to project business growth. Our tax preparation services will ensure you’re both tax compliant, as well as maximising your tax return, through our in-depth tax knowledge.
                            <br />
                            Whatever your accounting or financial need, our team of experts has
                            the knowledge and skills to provide the professional services you need.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className='accountFinanceDiv02'>
                        <div>
                            <h1 className='adminSupportHeader02'>Services include:</h1>
                            <ul>
                                {adminArray && adminArray.map((element, i) => {
                                    return (
                                        <li className='adminSupportList' key={i}>{'\u2022'} {element}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AccountFinance;
