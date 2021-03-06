import React from 'react'

function NavbarView(props) {
    const {t,rtl}=props;
    return (
        <>
            {/*-NavBar Starts*/}
            <nav id="pageTop" className="navbar navbar-expand-md navbar-dark bg-dark">
                {/*-Drawer Start*/}
                <button className="btn btn-outline-light" data-toggle="drawer" data-target="#amazonDrawer"><i className="fas  fa-sliders-h" /></button>
                <div className="drawer drawer-left slide" tabIndex={-1} role="dialog" aria-labelledby="drawer-demo-title" aria-hidden="true" id="amazonDrawer">
                    <div className="drawer-content drawer-content-scrollable" role="document">
                        <div className="drawer-header bg-dark text-white">
                            <h4 className={`drawer-title mx-auto ${rtl}`} id="drawer-demo-title">
                                <i className="fas fa-user-circle" />
                {t('navbar.sidebar_title')}
              </h4>
                        </div>
                        <div className="drawer-body">
                            <h6 className={`text-muted text-uppercase ${rtl}`}>{t('navbar.sidebar_help_title')}</h6>
                            <a href="your_account.html" className={`btn btn-outline-success my-2 btn-sm ${rtl}`}>{t('navbar.btn_account_title')}</a>
                            <a href="login.html" className={`btn btn-outline-warning my-2 btn-sm ${rtl}`}>{t('navbar.btn_signin_title')}</a>
                        </div>
                        <div className="drawer-footer"><button type="button" className="btn btn-outline-danger btn-block  close" data-dismiss="drawer" aria-label="Close">
                            <i className="fas fa-2x fa-times" />
                        </button></div>
                    </div>
                </div>
                {/*--Drawer Ends*/}
                <a className="navbar-brand pl-3" href="#"><img src="assets/img/logo1.png" alt="logo" width={100} height={30} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*-Search Bar Start*/}
                    <form className="from-inline px-lg-5" onSubmit={props.handleSearch} noValidate method="get">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="dropdown">
                                    <button className={`btn btn-secondary dropdown-toggle ${rtl}`} name="btnCategory" type="button" id="btnCategorydropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t(props.productCategory[props.selectedCat])}
                  </button>
                                    <div className="dropdown-menu" aria-labelledby="btnCategorydropDownMenu">
                                        <a className={`dropdown-item ${rtl}`} href="#" onClick={(e)=>{props.handleCatChange(e,0)}}>{t('navbar.product_category.all')}</a>
                                        <a className={`dropdown-item ${rtl}`} href="#" onClick={(e)=>{props.handleCatChange(e,1)}}>{t('navbar.product_category.smartphone')}</a>
                                        <a className={`dropdown-item ${rtl}`} href="#" onClick={(e)=>{props.handleCatChange(e,2)}}>{t('navbar.product_category.primary_deals')}</a>
                                        <a className={`dropdown-item ${rtl}`} href="#" onClick={(e)=>{props.handleCatChange(e,3)}}>{t('navbar.product_category.books')}</a>
                                    </div>
                                </div>
                            </div>
                            <input type="text" name="query" id="query" size={50} className={`form-control ${rtl}`}
                            onChange={props.handleQueryChange} value={props.query}
                             />
                            <input type="text" name="category" id="category" defaultValue={props.selectedCat} hidden />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-warning"><i className="fas fa-search" /></button>
                            </div>
                        </div>
                    </form>
                    {/*-Search Bar End*/}
                    <ul className="navbar-nav">
                        {/*-Prefered Language Start*/}
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="#" id="prefLanguageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-2x fa-language" />
                            </a>
                            <div className="dropdown-divider" />
                            <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                                <form className="p-3">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="prefLang" id="engLang" defaultValue="en" onClick={props.handleChangeLang} defaultChecked={props.prefLang=="en"?true:false} />
                                        <label className="form-check-label" htmlFor="engLang">
                                            <img src="assets/img/uk.png" alt="uk" width={50} height={30} />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="form-check  mb-2">
                                        <input className="form-check-input" type="radio" name="prefLang" id="hindiLang" defaultValue="in" onClick={props.handleChangeLang} defaultChecked={props.prefLang=="in"?true:false} />
                                        <label className="form-check-label" htmlFor="hindiLang">
                                            <img src="assets/img/india.webp" margin-top="10px" alt="india" width={50} height={30} />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="form-check  mb-2">
                                        <input className="form-check-input" type="radio" name="prefLang" id="urduLang" defaultValue="pk" onClick={props.handleChangeLang} defaultChecked={props.prefLang=="pk"?true:false} />
                                        <label className="form-check-label" htmlFor="urduLang">
                                            <img src="assets/img/pak.jpg" margin-top="10px" alt="pak" width={50} height={30} />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="prefLang" id="banglaLang" defaultValue="bd" onClick={props.handleChangeLang} defaultChecked={props.prefLang=="bd"?true:false} />
                                        <label className="form-check-label" htmlFor="banglaLang">
                                            <img src="assets/img/bangla.png" margin-top="10px" alt="bangla" width={50} height={30} />
                                        </label>
                                    </div>
                                    <div className="dropdown-divider">
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/*-Prefered Language End*/}
                        {/*--User Account Start*/}
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle" href="login.html" id="userAccount" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-2x  fa-user-circle" />
                            </a>
                            <div className="dropdown-divider" />
                            <div className="dropdown-menu px-3" aria-labelledby="userAccount">
                                <div className="d-flex row justify-content-center">
                                    <a href="#" className={`btn btn-warning w-75 btn-sm font-weight-bold ${rtl}`}>{t('navbar.menu_signin_btn_title')}</a>
                                    <small className={`text-muted ${rtl}`}>{t('navbar.menu_signin_sub_title')}?<a href="register.html">{t('navbar.menu_signin_register_text')}</a></small>
                                </div>
                            </div>
                        </li>
                        {/*--User Account End*/}
                        {/*-Shopping Cart Start*/}
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" aria-disabled="true">
                                <i className="fas fa-2x text-light fa-shopping-cart" />
                                <span className="badge badge-warning badge-pill">0</span>
                            </a>
                        </li>
                        {/*-Shopping Cart End*/}
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default NavbarView;