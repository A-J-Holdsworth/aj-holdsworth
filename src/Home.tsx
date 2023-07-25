import { Grid, Paper } from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmailIcon from "@mui/icons-material/Email";
import WifiIcon from "@mui/icons-material/Wifi";
import PrintIcon from "@mui/icons-material/Print";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import BackupIcon from "@mui/icons-material/Backup";
import "./Home.scss";
import Service from "./Service";

const Home = () => {
  const windows = [
    "Setup",
    "Updates",
    "Wipe / Reinstall",
    "Performance Issues",
    "Account Management",
    "Viruses / Malware",
  ];
  const laptops = [
    "Diagnostics",
    "Screen Replacements",
    "Keyboard Replacements",
    "Battery Replacements",
    "Motherboard Replacements",
  ];
  const desktops = [
    "Hardware Replacements",
    "Software Installation",
    "Security / Updates",
    "Performance Upgrades",
    "Motherboard Replacements",
    "Refurbished PCs",
  ];
  const emails = [
    "Setup / Transfer",
    "Phone Setup",
    "Account Recovery",
    "Multiple Devices",
  ];
  //const wifis = ["Routers", "WiFi", "Poor Performance", "Poor Signal", "Security", "Troubleshooting"];
  const printers = [
    "Setup / Installation",
    "Connection Issues",
    "Wireless Printing",
  ];
  const office = [
    "Install & Setup",
    "Word",
    "Powerpoint",
    "Excel",
    "Office365",
  ];
  const backups = [
    "Data Backups",
    "System Backups",
    "Cloud Backups",
    "Local Backups",
    "Data Recovery",
    "Scheduled Backups",
  ];

  return (
    <div>
      <p>Blurb</p>

      <Grid container spacing={2}>
        <Grid xs={12} sm={4} md={4} item>
          <Paper elevation={2} className="paper">
            Dropoff & Collection
          </Paper>
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <Paper elevation={2} className="paper">
            Remote Support
          </Paper>
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <Paper elevation={2} className="paper">
            Home / Business Visits
          </Paper>
        </Grid>
      </Grid>

      <h3>Services Offered</h3>

      <Grid container spacing={2}>
        <Service title="Windows" icon={<WindowIcon />} services={windows} />
        <Service
          title="PC / Desktops"
          icon={<PersonalVideoIcon />}
          services={desktops}
        />
        <Service title="Laptops" icon={<LaptopIcon />} services={laptops} />
        <Service title="Email" icon={<EmailIcon />} services={emails} />
        <Service
          title="WiFi / Broadband"
          icon={<WifiIcon />}
          services={emails}
        />
        <Service
          title="Printers / Scanners"
          icon={<PrintIcon />}
          services={printers}
        />
        <Service
          title="Microsoft Office"
          icon={<DescriptionIcon />}
          services={office}
        />
        <Service
          title="Backup & Recovery"
          icon={<BackupIcon />}
          services={backups}
        />
      </Grid>
    </div>
  );
};

export default Home;
