# NET01 - Configuration reference

These commands reconstruct the configuration documented in the NET01 build. They are not exported running-config files. Use them on a new matching Packet Tracer topology, not blindly on an existing network. Interface labels follow the case-study port map.

All subnets use /24 masks. No DNS service, Internet access, ACLs, SSH, or redundancy is configured. The native VLAN remains 1 on both ends of each trunk.

## SW1-DISTRIBUTION

```text
enable
configure terminal
hostname SW1-DISTRIBUTION
no ip domain-lookup
vlan 10
 name IT
exit
vlan 20
 name SALES
exit
vlan 30
 name HR
exit
vlan 40
 name MARKETING
exit
vlan 110
 name SERVERS
exit
vlan 160
 name MONITORING
exit
interface FastEthernet0/1
 description IT-PC01
 switchport mode access
 switchport access vlan 10
exit
interface FastEthernet0/2
 description SERVER01
 switchport mode access
 switchport access vlan 110
exit
interface FastEthernet0/3
 description MONITORING01
 switchport mode access
 switchport access vlan 160
exit
interface GigabitEthernet0/1
 description TRUNK_TO_R1_Gi0/0
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40,110,160
exit
interface GigabitEthernet0/2
 description TRUNK_TO_SW2_Gi0/1
 switchport mode trunk
 switchport trunk allowed vlan 20,30,40
exit
end
```

## SW2-ACCESS

```text
enable
configure terminal
hostname SW2-ACCESS
no ip domain-lookup
vlan 10
 name IT
exit
vlan 20
 name SALES
exit
vlan 30
 name HR
exit
vlan 40
 name MARKETING
exit
vlan 110
 name SERVERS
exit
vlan 160
 name MONITORING
exit
interface FastEthernet0/1
 description SALES-PC01
 switchport mode access
 switchport access vlan 20
exit
interface FastEthernet0/2
 description HR-PC01
 switchport mode access
 switchport access vlan 30
exit
interface FastEthernet0/3
 description MKT-PC01
 switchport mode access
 switchport access vlan 40
exit
interface GigabitEthernet0/1
 description TRUNK_TO_SW1_Gi0/2
 switchport mode trunk
 switchport trunk allowed vlan 20,30,40
exit
end
```

## R1-CORE

```text
enable
configure terminal
hostname R1-CORE
no ip domain-lookup
interface GigabitEthernet0/0
 description TRUNK_TO_SW1_Gi0/1
 no ip address
 no shutdown
exit
interface GigabitEthernet0/0.10
 description IT_GATEWAY
 encapsulation dot1Q 10
 ip address 10.20.10.1 255.255.255.0
exit
interface GigabitEthernet0/0.20
 description SALES_GATEWAY
 encapsulation dot1Q 20
 ip address 10.20.20.1 255.255.255.0
exit
interface GigabitEthernet0/0.30
 description HR_GATEWAY
 encapsulation dot1Q 30
 ip address 10.20.30.1 255.255.255.0
exit
interface GigabitEthernet0/0.40
 description MARKETING_GATEWAY
 encapsulation dot1Q 40
 ip address 10.20.40.1 255.255.255.0
exit
interface GigabitEthernet0/0.110
 description SERVERS_GATEWAY
 encapsulation dot1Q 110
 ip address 10.10.20.1 255.255.255.0
exit
interface GigabitEthernet0/0.160
 description MONITORING_GATEWAY
 encapsulation dot1Q 160
 ip address 10.10.30.1 255.255.255.0
exit
ip dhcp excluded-address 10.20.10.1 10.20.10.99
ip dhcp excluded-address 10.20.20.1 10.20.20.99
ip dhcp excluded-address 10.20.30.1 10.20.30.99
ip dhcp excluded-address 10.20.40.1 10.20.40.99
ip dhcp pool IT
 network 10.20.10.0 255.255.255.0
 default-router 10.20.10.1
exit
ip dhcp pool SALES
 network 10.20.20.0 255.255.255.0
 default-router 10.20.20.1
exit
ip dhcp pool HR
 network 10.20.30.0 255.255.255.0
 default-router 10.20.30.1
exit
ip dhcp pool MARKETING
 network 10.20.40.0 255.255.255.0
 default-router 10.20.40.1
exit
end
```

## Endpoints

Set the four PCs to DHCP. Keep SERVER01 static at 10.10.20.100/24, gateway 10.10.20.1; keep MONITORING01 static at 10.10.30.100/24, gateway 10.10.30.1. Leave DNS unset until a DNS service is added.

## Verification commands

| Command | Where | Purpose |
| --- | --- | --- |
| `show vlan brief` | Both switches | Verify VLANs and access-port membership |
| `show interfaces trunk` | Both switches | Check operational trunks, allowed VLANs and forwarding state |
| `show spanning-tree vlan 20` | SW2 | Inspect port roles and forwarding for Sales |
| `show spanning-tree vlan 30` | SW2 | Inspect port roles and forwarding for HR |
| `show ip interface brief` | R1 | Confirm physical and logical interfaces are up/up |
| `show ip dhcp binding` | R1 | List leases issued to the PCs |
| `show ip dhcp pool` | R1 | Review pool usage |
| `ipconfig /all` | PCs | Check assigned address, mask, gateway and DHCP server |
| `ping <gateway or host IP>` | PCs/servers | Test ICMP reachability to a specific destination |

## Save checkpoint

On R1 and both switches, run `copy running-config startup-config` and accept the destination filename. Save the Packet Tracer file as NET01_Main_Building.pkt. This is the closing procedure; the project screenshots do not independently prove a saved configuration or reboot persistence.
