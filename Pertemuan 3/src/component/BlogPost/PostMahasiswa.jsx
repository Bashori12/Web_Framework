import React from "react";

const PostMahasiswa = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Mahasiswa"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="judul-mahasiswa">
                    <div className="judul-mahasiswa">Nama : {props.nama}</div>
                    <p className="isi-mahasiswa">NIM : {props.nim}</p>
                    <p className="isi-mahasiswa">Alamat : {props.alamat}</p>
                    <p className="isi-mahasiswa">Hp : {props.hp}</p>
                    <p className="isi-mahasiswa">Angkatan : {props.angkatan}</p>
                    <p className="isi-mahasiswa">Status : {props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id)}>Hapus</button>
                </div>
            </div>
        </div>  
    )
}

export default PostMahasiswa;