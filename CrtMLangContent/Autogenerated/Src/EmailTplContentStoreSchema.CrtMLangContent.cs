﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmailTplContentStoreSchema

	/// <exclude/>
	public class EmailTplContentStoreSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmailTplContentStoreSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmailTplContentStoreSchema(EmailTplContentStoreSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6a217d7c-9cc3-443b-bba0-3897ba7e7e87");
			Name = "EmailTplContentStore";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("16e592d3-2033-426b-b620-6aa2b1f8eec0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,89,91,111,219,54,20,126,118,129,254,7,78,123,145,1,67,198,128,1,3,146,216,69,146,58,129,129,102,237,234,172,125,8,130,129,150,232,132,171,44,57,36,149,206,11,252,223,119,120,21,73,203,142,141,109,47,129,69,242,220,191,115,33,83,225,37,225,43,156,19,116,75,24,195,188,94,136,236,178,174,22,244,161,97,88,208,186,122,251,230,229,237,155,94,195,105,245,128,102,107,46,200,242,52,250,134,243,101,73,114,121,152,103,215,164,34,140,230,91,103,62,208,234,169,93,244,101,49,178,107,61,155,84,130,10,74,120,204,109,70,132,128,47,142,70,72,157,11,20,206,224,140,61,0,132,64,250,35,35,15,176,129,46,75,204,249,9,154,44,49,45,111,87,37,80,9,82,137,153,0,22,234,220,112,56,68,103,188,89,46,49,91,143,205,247,103,178,98,132,195,49,142,136,164,67,32,126,85,98,65,80,174,201,17,151,244,153,37,31,122,244,171,102,94,210,28,229,82,108,167,84,116,130,166,161,22,189,23,165,201,150,202,127,9,134,167,213,162,214,187,177,162,177,166,82,53,76,33,16,168,94,160,18,87,15,13,126,32,104,197,234,21,97,210,159,153,99,226,171,219,131,3,2,226,72,10,171,114,43,181,103,21,115,154,125,114,220,78,208,39,101,168,57,176,165,156,90,249,96,181,160,5,168,72,23,148,176,172,61,30,168,97,253,118,221,208,194,209,77,11,244,130,30,136,56,69,92,254,217,28,38,44,175,11,242,154,24,46,152,68,150,165,185,4,146,35,68,221,90,56,44,113,206,106,142,158,113,217,188,42,114,190,22,228,238,30,221,104,146,46,97,63,146,170,208,142,214,11,102,61,94,118,48,129,212,19,50,16,140,62,131,50,122,115,165,63,36,26,184,232,50,19,242,182,89,86,144,68,137,93,205,228,114,114,250,42,245,180,232,160,157,22,123,40,181,173,45,149,78,7,227,188,76,239,38,42,93,247,217,185,11,116,157,9,241,59,135,4,0,37,42,93,155,118,129,94,135,68,30,190,116,103,227,207,23,21,20,25,38,47,24,157,66,223,83,69,1,75,3,155,134,50,31,149,217,21,212,90,132,57,250,70,214,8,87,133,93,198,37,133,69,236,99,103,167,154,45,251,51,237,216,129,113,240,24,157,151,146,143,246,240,13,94,29,163,51,17,132,45,161,94,112,244,253,145,136,71,112,155,168,145,192,223,32,91,43,248,133,243,188,110,160,210,49,250,240,8,213,5,86,56,145,5,31,21,88,224,29,250,170,21,6,37,147,125,227,227,247,100,129,155,82,104,3,17,5,22,12,12,61,27,218,125,207,192,121,93,151,210,251,231,5,40,244,89,11,12,18,4,192,35,169,79,143,0,138,45,107,97,90,184,234,134,254,224,107,174,190,128,119,213,148,229,233,78,79,233,246,211,150,84,162,168,168,100,178,96,245,82,238,95,130,161,13,219,25,70,87,98,91,241,51,35,93,125,184,168,161,209,216,83,236,221,59,148,250,106,94,19,1,185,46,217,218,244,75,251,125,165,119,143,199,180,35,237,119,31,6,123,235,8,107,114,104,70,135,100,216,180,130,246,12,240,253,27,144,83,145,239,224,8,46,112,5,179,4,180,157,51,78,160,4,48,178,24,37,93,173,47,25,142,247,33,103,133,25,94,170,132,25,37,77,144,139,201,56,206,235,179,161,58,237,163,168,75,98,26,229,116,200,182,111,60,31,29,26,69,199,180,139,227,84,27,41,235,119,231,102,218,63,196,249,55,144,122,117,177,171,138,183,16,233,138,189,209,254,25,51,84,232,100,51,56,4,221,194,153,9,38,52,241,69,226,33,242,199,0,37,134,171,161,76,6,170,3,103,147,229,74,172,13,182,36,127,238,48,62,225,79,198,116,53,168,173,103,249,35,36,244,111,13,97,235,136,121,230,31,184,193,21,232,204,64,96,155,46,137,39,160,116,45,74,250,247,87,89,52,71,161,212,236,188,48,13,40,141,59,82,63,147,4,93,204,138,227,24,182,4,49,203,150,114,139,13,248,86,91,186,229,220,48,42,198,90,186,64,169,199,237,7,93,126,108,48,123,140,192,114,165,29,28,21,136,94,47,152,87,124,61,164,18,183,235,21,49,6,169,88,159,89,32,118,187,163,63,136,152,194,180,245,42,75,9,14,159,161,99,166,121,109,180,137,27,245,183,203,146,48,41,28,204,149,251,208,37,35,240,245,133,50,209,96,55,38,24,215,154,35,197,124,2,229,103,109,189,229,35,12,61,107,66,243,53,66,175,163,81,154,56,53,229,235,98,45,237,72,19,35,62,42,38,22,170,70,13,152,185,193,73,230,99,20,74,206,180,25,157,144,48,92,124,242,12,114,20,90,165,231,100,158,90,97,46,254,196,253,82,93,192,69,76,122,212,186,164,155,181,199,55,77,218,72,67,158,59,158,89,187,124,12,19,53,53,118,177,145,27,135,48,154,53,243,63,193,45,192,195,152,176,23,196,238,120,255,16,222,23,117,177,62,148,177,58,187,139,235,5,76,237,220,48,53,3,171,111,179,94,114,180,10,240,62,139,46,180,63,215,112,197,113,181,7,90,73,186,85,73,17,225,79,3,52,157,84,205,146,48,60,47,157,182,102,124,228,54,1,22,208,227,112,254,8,21,69,79,220,102,186,164,85,124,48,110,95,119,122,255,30,0,69,130,82,152,111,149,191,205,206,140,245,53,150,85,144,63,93,213,76,47,90,133,184,250,58,200,22,89,102,201,191,236,46,90,156,137,71,224,99,229,81,43,49,136,23,236,116,22,37,191,247,6,25,103,242,94,4,21,202,90,161,102,89,202,111,36,69,112,223,145,51,108,64,145,217,122,161,149,202,206,171,181,241,190,28,229,244,175,76,55,46,239,198,149,120,109,164,75,204,222,70,226,102,134,173,86,18,169,182,47,97,98,36,109,55,207,251,238,222,114,128,12,221,95,118,73,176,253,190,229,111,110,211,93,188,189,204,141,249,249,247,210,251,174,214,101,58,190,31,117,61,83,57,79,154,177,59,60,147,29,166,142,45,36,33,12,35,94,71,14,143,193,109,231,238,227,156,215,37,92,240,210,228,43,45,75,52,39,80,148,150,245,51,220,64,240,2,174,125,232,151,236,167,159,147,254,125,120,57,49,93,172,107,164,173,85,233,29,203,76,128,12,44,168,122,246,75,213,91,13,241,193,55,45,244,252,232,38,48,104,41,6,113,30,28,247,8,48,232,124,137,222,10,100,205,13,229,160,205,192,29,117,169,49,240,228,34,29,201,205,113,126,124,237,242,3,14,224,118,172,115,143,129,243,182,22,196,47,93,7,220,116,132,179,41,25,79,194,215,70,143,153,127,223,49,215,108,233,79,30,147,16,13,56,121,205,214,251,254,5,73,215,173,107,53,112,72,11,116,4,91,5,58,199,42,126,196,60,117,69,171,34,30,168,194,64,134,115,148,104,107,35,63,116,120,178,52,89,244,96,48,138,94,16,130,228,114,68,87,68,228,143,87,112,109,127,127,145,250,134,191,219,59,125,10,87,92,79,218,199,130,125,175,43,10,39,184,50,207,199,22,40,58,56,18,47,20,182,219,232,162,84,35,2,46,206,6,20,140,228,53,43,0,18,195,113,223,242,148,175,71,238,17,98,31,113,155,4,146,252,80,28,58,145,199,160,208,103,224,137,29,119,189,252,254,183,16,214,216,181,74,239,44,59,237,80,17,15,40,33,48,165,194,137,41,41,80,163,238,238,209,75,199,179,233,96,235,49,116,16,62,114,110,12,72,205,76,5,141,71,75,51,61,62,245,182,175,104,9,165,152,203,99,114,56,49,200,215,171,95,169,120,252,36,157,37,31,233,120,170,23,47,235,37,56,144,242,186,146,109,51,155,60,1,78,7,219,133,210,186,164,255,63,200,234,172,180,190,160,131,114,82,197,36,26,141,136,127,145,110,255,183,20,151,128,108,6,237,162,36,31,153,173,96,222,52,20,178,220,113,175,222,151,229,1,131,126,199,85,214,235,46,163,112,28,240,238,80,80,74,188,10,235,162,209,81,57,162,118,164,87,195,197,205,63,217,23,46,219,171,27,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6a217d7c-9cc3-443b-bba0-3897ba7e7e87"));
		}

		#endregion

	}

	#endregion

}
