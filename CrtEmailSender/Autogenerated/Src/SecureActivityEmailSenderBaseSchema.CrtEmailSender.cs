﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SecureActivityEmailSenderBaseSchema

	/// <exclude/>
	public class SecureActivityEmailSenderBaseSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SecureActivityEmailSenderBaseSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SecureActivityEmailSenderBaseSchema(SecureActivityEmailSenderBaseSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5e1be500-be05-4b71-94d2-840b8b5e5966");
			Name = "SecureActivityEmailSenderBase";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,86,75,111,227,54,16,62,123,129,253,15,132,246,80,185,112,101,244,86,228,225,109,227,117,178,57,100,27,36,78,11,52,73,1,70,30,91,236,74,164,65,142,156,184,69,254,123,135,164,36,75,178,228,228,18,71,163,121,124,243,205,75,146,103,96,214,60,6,54,7,173,185,81,75,140,166,74,46,197,42,215,28,133,146,31,63,252,247,241,195,32,55,66,174,216,237,214,32,100,199,213,115,221,68,67,151,252,138,139,52,186,5,185,0,125,220,114,19,205,225,5,163,27,88,229,41,215,179,151,181,6,99,40,158,233,115,31,125,57,235,125,53,147,40,80,64,143,109,150,41,73,111,232,221,39,13,43,138,193,166,41,55,230,136,221,66,156,107,248,45,70,177,17,184,157,101,4,214,99,117,202,227,241,152,157,152,60,203,184,222,78,218,207,236,6,44,98,144,104,24,38,192,140,179,99,177,117,204,212,210,201,212,211,63,16,227,15,134,89,199,140,120,54,124,5,134,61,139,56,33,209,150,37,124,99,13,9,3,69,103,168,190,131,164,0,0,44,214,176,60,13,74,92,193,120,18,157,140,219,64,234,130,117,254,148,138,184,8,222,155,212,25,55,192,142,88,207,27,114,99,11,93,81,116,173,213,26,180,37,245,200,254,143,148,9,44,28,47,123,196,56,193,159,74,127,167,212,48,105,101,20,149,10,66,26,228,146,26,173,96,167,150,233,109,97,49,183,6,119,40,82,87,76,202,219,167,84,197,172,231,60,88,151,160,88,183,121,143,216,103,57,88,1,30,19,82,180,29,51,120,61,144,151,163,137,61,169,197,214,103,167,97,157,210,184,44,90,217,245,97,51,168,109,59,58,47,103,214,73,127,248,79,84,11,79,126,241,92,54,43,13,5,234,60,70,165,13,213,239,218,21,187,3,241,165,164,4,121,42,254,5,38,225,249,77,190,187,90,164,162,188,217,112,62,206,154,107,158,49,73,11,227,52,0,107,51,77,5,245,255,57,183,200,182,193,100,182,147,177,165,23,86,32,200,159,51,239,246,150,27,208,148,165,36,202,40,225,96,114,103,236,40,85,130,110,47,69,211,31,108,247,240,114,182,7,148,237,99,31,177,187,6,2,214,4,52,116,37,59,98,79,214,99,151,117,75,189,168,113,79,91,158,186,234,116,191,12,91,158,118,237,113,168,65,174,0,19,181,120,231,156,222,248,254,45,214,141,163,19,16,168,179,80,29,108,233,189,162,33,173,239,96,98,151,56,123,78,26,43,173,237,186,89,182,106,52,54,66,99,206,211,114,68,10,96,215,149,217,92,57,114,194,226,189,141,87,82,91,136,214,28,73,81,18,165,191,6,15,247,15,159,195,251,191,31,30,31,127,28,62,124,126,120,12,28,119,131,13,215,4,12,227,196,49,79,215,6,94,232,40,185,231,208,122,28,149,78,134,59,125,218,235,121,138,164,110,21,188,120,73,87,134,83,142,161,179,245,30,169,45,75,215,37,46,103,238,210,191,164,11,231,82,177,97,157,86,116,161,85,190,54,247,63,63,70,127,240,52,135,227,150,5,233,117,55,69,52,165,216,8,158,140,250,237,156,201,88,45,136,135,232,110,126,254,75,116,1,120,182,69,155,86,51,254,176,200,108,208,72,43,42,232,14,61,54,135,104,228,129,20,250,175,238,175,6,204,137,97,111,187,183,44,133,76,128,0,47,84,204,198,173,234,170,13,93,96,177,0,182,81,194,174,104,44,71,116,170,210,60,147,46,160,9,221,225,166,145,116,63,37,139,118,206,162,62,139,66,213,99,20,75,22,86,171,53,186,52,223,20,126,203,211,244,119,61,203,214,184,13,135,85,93,188,149,117,90,115,22,6,246,243,228,43,55,73,48,98,94,111,80,198,180,236,27,203,169,115,111,117,194,66,99,208,220,21,163,82,92,134,224,75,184,104,132,57,249,98,171,39,50,152,132,129,93,77,246,49,24,190,195,206,119,57,89,205,5,166,117,147,42,229,81,55,166,104,154,107,77,126,173,52,178,145,255,82,18,134,245,186,190,113,114,118,27,165,239,216,148,2,155,16,131,159,234,95,56,209,123,55,72,161,79,151,163,97,127,240,84,8,243,21,179,52,152,156,167,156,86,66,194,145,166,112,33,98,162,148,62,172,18,130,77,151,195,137,11,103,236,153,250,19,237,73,162,105,77,200,148,209,40,83,207,31,62,72,98,37,105,224,111,196,42,65,243,70,44,197,188,50,211,78,187,235,68,181,71,65,46,124,211,94,21,16,11,168,35,250,202,80,41,243,25,150,15,53,32,101,51,151,52,187,207,137,211,254,189,89,215,43,106,191,251,12,57,101,245,215,199,245,185,35,120,21,162,70,252,3,31,43,94,90,23,190,254,15,25,100,223,75,90,12,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5e1be500-be05-4b71-94d2-840b8b5e5966"));
		}

		#endregion

	}

	#endregion

}
