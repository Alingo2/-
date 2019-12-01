import netifaces as ni
import ipaddress

def ipv4():
    '''
    return the non loopback ipv4 address of the computer
    sample output: ['10.122.122.122']
    '''
    its = ni.interfaces()
    ips = [ni.ifaddresses(i)[ni.AF_INET][0]['addr'] for i in its]
    ips = [i for i in ips if not ipaddress.IPv4Address(i).is_loopback]
    return ips

def ipv6():
    '''
    return the non loopback ipv4 address of the computer
    sample output: ['2001:da8:215:8f01::1']
    AF_INET6
    '''
    its = ni.interfaces()
    ips = [ni.ifaddresses(i)[ni.AF_INET6][0]['addr'] for i in its]
    ips = [i for i in ips if not ipaddress.IPv6Address(i).is_loopback]
    return ips
