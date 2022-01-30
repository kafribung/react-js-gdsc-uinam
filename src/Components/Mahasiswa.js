function Mahasiswa(props) {

    const {jk, nama} = props;
    
    return (
        <div>
            <div>Nama: { nama }</div>
            <div>Jenis Kelamin: { jk }</div>
        </div>
    )
}

export default Mahasiswa;