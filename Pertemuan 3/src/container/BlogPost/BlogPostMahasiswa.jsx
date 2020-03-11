import React, { Component } from "react";
import './BlogPost.css';
import PostMahasiswa from "../../component/BlogPost/PostMahasiswa";

class BlogPostMahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nama: "",
            nim: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
            .then(response => response.json()
                .then(jsonHasilAmbildariAPI => {
                    this.setState({
                        listMahasiswa: jsonHasilAmbildariAPI
                    })
                }))
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch('http://localhost:3001/mahasiswa/' + data, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3001/mahasiswa`, {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sn-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nim" name="nim" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Hp</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mhs => {
                        return <PostMahasiswa
                            key={mhs.id}
                            nama={mhs.nama}
                            nim={mhs.nim}
                            alamat={mhs.alamat}
                            hp={mhs.hp}
                            angkatan={mhs.angkatan}
                            status={mhs.status}
                            hapusMahasiswa={() => this.handleHapusMahasiswa(mhs.id)} />
                    })
                }
            </div>
        )
    }
}

export default BlogPostMahasiswa;