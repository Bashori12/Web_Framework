import React from "react";

const PostMahasiswa = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Mahasiswa"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="judul-mahasiswa">Nama : {props.Nama}</div>
                <p className="isi-mahasiswa">NIM : {props.NIM}</p>
                <p className="isi-mahasiswa">Alamat : {props.Alamat}</p>
                <p className="isi-mahasiswa">Hp : {props.Hp}</p>
                <p className="isi-mahasiswa">Angaktan : {props.Angkatan}</p>
                <p className="isi-mahasiswa">Status : {props.Status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>        
    )
}

export default PostMahasiswa;