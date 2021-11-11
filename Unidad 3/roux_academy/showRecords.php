<?php
  require('externosEncaPie/AdminHeader.php');
  if(!isset($_SESSION['user'])){
    header('Location: index.php');
  }
  
    
  echo 
  "<script>
    function cerrar(){
      if(confirm('Do you want to sign off?')){
        document.location='closeSesion.php';
      }
  }
  </script>";
?>
<!-- Rotator -->
<section id="main">
  <div class="tablepos">
    <table class="datatable">
      <thead>
        <tr>
          <th class="labels">Name</th>
          <th class="labels">Company</th>
          <th class="labels">Email</th>
        </tr>
      </thead>
      
      <tbody>
        <?php
        require ('tableQuery.php');
        foreach ($queryTable as $st){?>
        <tr>
          <td class="labelName"><?php echo $st['user_name']?><br><br></td>
          <td class="data"><?php echo $st['company_name']?><br><br></td>
          <td class="data"><?php echo $st['email']?><br><br></td>
        </tr>
      </tbody>
        <?php
      }
      ?>
    </table>
</div>
</section>
<?php
include('externosEncaPie/piePagina.php');
?>
</div>
</body>
</html>