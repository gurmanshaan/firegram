import React, { useState } from 'react'
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title'
import UploadForm from './components/UploadForm';
import './Home.css';

export default function Home() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div >
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}
