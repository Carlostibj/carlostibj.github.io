# NET03 - Access Switch Replacement, Migration & Rollback

This reference is reconstructed from the documented Packet Tracer session. It is
not an exported running configuration. The case study contains observed results;
the commands below provide a readable reference for the same-model lab change.

## Scope and port map

Replace SW2-ACCESS with SW2-REPLACEMENT (Cisco 2960-24TT). R1-CORE remains the
router and DHCP server. Preserve PVST and native VLAN 1. There is one uplink,
with a planned interruption while moving cables; no outage duration was measured.

| Connection | Original SW2 port | Replacement port | Role |
| --- | --- | --- | --- |
| SALES-PC01 FastEthernet0 | Fa0/1 | Fa0/1 | Access VLAN 20 |
| HR-PC01 FastEthernet0 | Fa0/2 | Fa0/2 | Access VLAN 30 |
| MKT-PC01 FastEthernet0 | Fa0/3 | Fa0/3 | Access VLAN 40 |
| SW1-DISTRIBUTION Gi0/2 | Gi0/1 | Gi0/1 | Trunk VLANs 20,30,40 |

## Survey the original

```text
enable
show interfaces status
show vlan brief
show interfaces trunk
show cdp neighbors
show running-config
```

Capture a port map and working client settings before changing cables. The
original VLAN database includes 10,20,30,40,110,160, but only 20,30,40 traverse
the access-switch uplink. Preserve the original switch for rollback.

## Stage the uncabled replacement

```text
enable
configure terminal
hostname SW2-REPLACEMENT
no ip domain-lookup
spanning-tree mode pvst
vlan 10
 name IT
vlan 20
 name SALES
vlan 30
 name HR
vlan 40
 name MARKETING
vlan 110
 name SERVERS
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
show vlan brief
show interfaces GigabitEthernet0/1 switchport
copy running-config startup-config
```

Accept the default destination filename when saving. Native VLAN 1 is the
observed default; no explicit native-VLAN change was required. Operationally
down is expected before cabling. DNS lookup disabling was added and saved
before cutover in the documented run.

## Cutover and checks

1. Disconnect the original uplink. Connect SW1 Gi0/2 to replacement Gi0/1
   with copper cross-over. Do not introduce an extra parallel uplink.
2. Allow convergence; verify `show interfaces trunk` and `show cdp neighbors`.
   Expected: VLANs 20,30,40 forwarding; SW1 neighbor remote port Gi0/2.
3. Move Sales, HR, and Marketing to the mapped replacement ports using
   copper straight-through. Check `show interfaces status`.
4. Repeat the client acceptance tests below.
5. Release/renew each client's lease and check the resulting settings.

| PC | Observed address /24 | Gateway test | Server test |
| --- | --- | --- | --- |
| Sales | 10.20.20.100 | ping 10.20.20.1 | ping 10.10.20.100 |
| HR | 10.20.30.100 | ping 10.20.30.1 | ping 10.10.20.100 |
| Marketing | 10.20.40.100 | ping 10.20.40.1 | ping 10.10.20.100 |

On each PC:

```text
ipconfig /release
ipconfig /renew
ipconfig
ping 10.10.20.100
```

The correct subnet, /24 mask, and gateway matter; renewal is not required to
return the same host address. All three documented renewals returned .100.

## Rollback and return to the replacement

Reconnect SW1 Gi0/2 to ORIGINAL SW2-ACCESS Gi0/1. Move Sales to original Fa0/1,
HR to original Fa0/2, and Marketing to original Fa0/3. Leave the replacement
uncabled. After convergence, check the original trunk and repeat all six
gateway/server tests. The documented rehearsal passed.

After verifying rollback, move those four connections to the replacement again.
Repeat trunk and six client tests. The documented final tests passed with 0% loss.
Save the replacement configuration and the completed Packet Tracer file. The
staged configuration save is captured; final saves were confirmed at closeout.
No switch reload or reboot persistence test was performed.
