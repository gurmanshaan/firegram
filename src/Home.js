import React from 'react'
import ImageGrid from './components/ImageGrid';
import Title from './components/Title'
import UploadForm from './components/UploadForm';
import './Home.css';
export default function Home() {
    return (
        <div >
            <Title />
            <UploadForm />
            <ImageGrid />
        </div>
    )
}
