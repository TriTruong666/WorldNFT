import React from 'react'
import '../../styles/Nav.css'
import searchIcon from '../../assets/search.svg'
class Navbar extends React.Component {
    render() {
        return (
            <header className='navbar-container'>
                <nav className='navbar'>
                    <div className="header-text">
                        <h2>World</h2>
                        <h2>NFT</h2>
                    </div>
                    <div className="search-box">
                        <div className="">
                            <img src={searchIcon} alt="" />
                            <input type="text" placeholder='Search items...' />
                        </div>
                    </div>
                    <ul className='nav-list'>
                        <li>Collection</li>
                        <li>Feature</li>
                        <li>FAQ</li>
                        <li>Select Wallet</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Navbar;