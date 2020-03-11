import React, {Component} from "react";
import './BlogPost.css';
import PostMahasiswa from "../../component/BlogPost/PostMahasiswa"

class BlogPostMahasiswa extends Component{
    state={
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            Nama: "",
            NIM: "",
            Alamat: "",
            Hp: "",
            Angkatan: "",
            Status: ""
        }
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTombolSimpan = () =>{
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) =>{
                this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sn-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Nama" name="Nama" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Alamat" name="Alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Hp</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Hp" name="Hp" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Angkatan" name="Angkatan" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sn-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Status" name="Status" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>{
                    this.state.listMahasiswa.map(mhs => {
                        return <PostMahasiswa 
                            key={mhs.id}
                            Nama={mhs.Nama}
                            NIM={mhs.NIM}
                            Alamat={mhs.Alamat}
                            Hp={mhs.Hp}
                            Angkatan={mhs.Angkatan}
                            Status={mhs.Status}
                            hapusMahasiswa={() => this.handleHapusMahasiswa(mhs.id)}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPostMahasiswa;