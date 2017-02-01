<?php
    include 'connection.php';
    $data = json_decode(file_get_contents("php://input"));


    if(!empty($_GET['action']) && $_GET['action']=='addRecord'){

        //post a job data from JSON
        $customer_id = mysqli_real_escape_string($link, $data->id);
        $account_number = mysqli_real_escape_string($link, $data->acnum);
        $amount = mysqli_real_escape_string($link, $data->amount);
        $roi = mysqli_real_escape_string($link, $data->roi);
        $depositDate = mysqli_real_escape_string($link, $data->depositDate);
        $maturityDate = mysqli_real_escape_string($link, $data->maturityDate);
        $period = mysqli_real_escape_string($link, $data->period);
        $maturityAmount = mysqli_real_escape_string($link, $data->maturityAmount);
        $name = mysqli_real_escape_string($link, $data->name);
        $panNumber = mysqli_real_escape_string($link, $data->panNumber);
        $branch = mysqli_real_escape_string($link, $data->branch);

        $result_post_job = mysqli_query($link, "INSERT INTO records( customer_id, ac_number, amount, rate_of_interest, deposit_date, maturity_date, period, maturity_amount, name, pan_number, branch, timestamp) 
        VALUES('$customer_id','$account_number', '$amount', '$roi', '$depositDate', '$maturityDate', '$period', '$maturityAmount', '$name', '$panNumber', '$branch',  Now() )");

        $arr = array('response' => 'Record Added');
        $jsn = json_encode($arr);
        print_r($jsn);


    }




    if(!empty($_GET['action']) && $_GET['action']=='todays'){

        $pageSize = $_GET['pageSize'];
        $pageNum =  $_GET['pageNum'];
        $start=$pageSize*($pageNum-1);
        $maturity_date = date("Y-m-d");


       $query_fetch_todays = mysqli_query($link, "SELECT * FROM records WHERE maturity_date='".$maturity_date."' LIMIT $start,$pageSize ");

        if(mysqli_num_rows($query_fetch_todays) > 0){
            $data = array();
            while ($row = mysqli_fetch_assoc($query_fetch_todays)) {
                $data[] = $row;
            }
            $all_data = [];
            $all_data['data'] = $data;
            print json_encode($all_data);
        }
        else {
                $arr = array('error' => 'Response Error');
                $jsn = json_encode($arr);
        }

    }


    if(!empty($_GET['action']) && $_GET['action']=='threeDays'){

        $pageSize = $_GET['pageSize'];
        $pageNum =  $_GET['pageNum'];
        $start=$pageSize*($pageNum-1);
        $maturity_date_today = date("Y-m-d");
        $maturity_date_threeDays = date("Y-m-d", strtotime('+3 days'));


        $query_fetch_todays = mysqli_query($link, "SELECT * FROM records WHERE maturity_date>'".$maturity_date_today."'AND maturity_date <= '".$maturity_date_threeDays."' ORDER BY maturity_date ASC  LIMIT $start,$pageSize ");

        if(mysqli_num_rows($query_fetch_todays) > 0){
            $data = array();
            while ($row = mysqli_fetch_assoc($query_fetch_todays)) {
                $data[] = $row;
            }
            $all_data = [];
            $all_data['data'] = $data;
            print json_encode($all_data);
        }
        else {
            $arr = array('error' => 'Response Error');
            $jsn = json_encode($arr);
        }

    }



    if(!empty($_GET['action']) && $_GET['action']=='sevenDays'){

        $pageSize = $_GET['pageSize'];
        $pageNum =  $_GET['pageNum'];
        $start=$pageSize*($pageNum-1);
        $maturity_date_today = date("Y-m-d");
        $maturity_date_SevenDays = date("Y-m-d", strtotime('+7 days'));


        $query_fetch_todays = mysqli_query($link, "SELECT * FROM records WHERE maturity_date>'".$maturity_date_today."' && maturity_date<='".$maturity_date_SevenDays."' ORDER BY maturity_date ASC LIMIT $start,$pageSize ");

        if(mysqli_num_rows($query_fetch_todays) > 0){
            $data = array();
            while ($row = mysqli_fetch_assoc($query_fetch_todays)) {
                $data[] = $row;
            }
            $all_data = [];
            $all_data['data'] = $data;
            print json_encode($all_data);
        }
        else {
            $arr = array('error' => 'Response Error');
            $jsn = json_encode($arr);
        }

    }


    if(!empty($_GET['action']) && $_GET['action']=='fifteenDays'){

        $pageSize = $_GET['pageSize'];
        $pageNum =  $_GET['pageNum'];
        $start=$pageSize*($pageNum-1);
        $maturity_date_today = date("Y-m-d");
        $maturity_date_FifteenDays = date("Y-m-d", strtotime('+15 days'));


        $query_fetch_todays = mysqli_query($link, "SELECT * FROM records WHERE maturity_date>'".$maturity_date_today."' && maturity_date<='".$maturity_date_FifteenDays."' ORDER BY maturity_date ASC LIMIT $start,$pageSize ");

        if(mysqli_num_rows($query_fetch_todays) > 0){
            $data = array();
            while ($row = mysqli_fetch_assoc($query_fetch_todays)) {
                $data[] = $row;
            }
            $all_data = [];
            $all_data['data'] = $data;
            print json_encode($all_data);
        }
        else {
            $arr = array('error' => 'Response Error');
            $jsn = json_encode($arr);
        }

    }


    if(!empty($_GET['action']) && $_GET['action']=='all'){

        $pageSize = $_GET['pageSize'];
        $pageNum =  $_GET['pageNum'];
        $start=$pageSize*($pageNum-1);

        $query_fetch_todays = mysqli_query($link, "SELECT * FROM records ORDER BY maturity_date ASC LIMIT $start,$pageSize");

        if(mysqli_num_rows($query_fetch_todays) > 0){
            $data = array();
            while ($row = mysqli_fetch_assoc($query_fetch_todays)) {
                $data[] = $row;
            }
            $all_data = [];
            $all_data['data'] = $data;
            print json_encode($all_data);
        }
        else {
            $arr = array('error' => 'Response Error');
            $jsn = json_encode($arr);
        }

    }


?>
