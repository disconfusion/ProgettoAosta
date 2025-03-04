export class ValidFields{
    id:number;
    idService:boolean;
    genInfo:boolean;
    serviceDetail:boolean;
    serviceAccess:boolean;
    contactsSupport:boolean;
    materials:boolean;

    constructor(id:number = 0,idService: boolean=false, genInfo: boolean=false, serviceDetail: boolean=false, serviceAccess: boolean=false, contactsSupport: boolean=false, materials: boolean=false) {
      this.id = id;
      this.idService = idService;
      this.genInfo = genInfo;
      this.serviceDetail = serviceDetail;
      this.serviceAccess = serviceAccess;
      this.contactsSupport = contactsSupport;
      this.materials = materials;
    }
}