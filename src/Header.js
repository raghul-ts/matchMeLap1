import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import GirlIcon from '@mui/icons-material/Girl';
import './Header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Icon, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
function Header({ backBtn }) {
  return (

    <div className='header'>
        {(backBtn==='/') ? (
            <Link to='/'>
                <IconButton>
                    <ArrowBackIcon className='fontIcon' fontSize='large'></ArrowBackIcon>
                </IconButton>
            </Link>
        ):(
            <Link>
                <IconButton>
                        <PersonIcon className='fontIcon' fontSize='large'/>
                </IconButton>
            </Link>
        )}
        <Link to='/' style={{textDecoration: 'none'}}>
            <GirlIcon className='fontIcon' fontSize='large'/>
            <h1 className='heading'>Match ME!</h1>
        </Link>
        <Link to='/chat'>
            <IconButton>
                    <ForumIcon className='fontIcon' fontSize='large'/>
            </IconButton>
        </Link>
    </div>
  )
}

export default Header
