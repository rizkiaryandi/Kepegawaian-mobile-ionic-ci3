<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Kepegawaian extends REST_Controller {

    function __construct($config = 'rest') {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        parent::__construct($config);
        if ( "OPTIONS" === $_SERVER['REQUEST_METHOD'] ) {
            die();
        }
        $this->load->database();
    }

    //Menampilkan data kontak
    function index_get() {
        $id = $this->get('pegawai_id');
        if ($id == '') {
            $pegawai = $this->db->get('pegawai')->result();
        } else {
            $this->db->where('pegawai_id', $this->get('pegawai_id'));
            $pegawai = $this->db->get('pegawai')->result();
        }
        $this->response($pegawai, 200);
    }

    function index_post() {
        $data = array(
            'pegawai_nama'              => $this->post('pegawai_nama'),
            'pegawai_nik'               => $this->post('pegawai_nik'),
            'pegawai_jenis_kelamin'     => $this->post('pegawai_jenis_kelamin'),
            'pegawai_tanggal_lahir'     => $this->post('pegawai_tanggal_lahir'));

        $insert = $this->db->insert('pegawai', $data);
        if ($insert) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_put() {
        $id = $this->put('pegawai_id');
        $data = array(
                    'pegawai_nama' => $this->put('pegawai_nama'));
        $this->db->where('pegawai_id', $id);
        $update = $this->db->update('pegawai', $data);
        if ($update) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_delete() {
        $this->db->where('pegawai_id', $_GET['pegawai_id']);
        $delete = $this->db->delete('pegawai');
        if ($delete) {
            $this->response(array('status' => 'success'), 201);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }



}
?>