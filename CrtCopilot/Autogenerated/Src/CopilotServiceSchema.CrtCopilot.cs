﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotServiceSchema

	/// <exclude/>
	public class CopilotServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotServiceSchema(CopilotServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ddfbfbad-129c-41c8-9c0d-cc46e8050670");
			Name = "CopilotService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,221,85,193,110,226,48,16,61,83,169,255,96,209,75,144,144,63,128,22,80,137,150,138,85,41,8,168,122,64,123,48,201,148,90,77,236,212,118,208,70,104,255,125,199,142,67,73,64,236,109,87,219,11,97,102,158,199,111,230,141,109,193,82,208,25,139,128,172,64,41,166,229,171,161,161,20,175,124,155,43,102,184,20,104,101,60,145,230,250,106,127,125,213,202,53,23,91,178,44,180,129,244,182,97,35,50,73,32,178,139,52,125,0,1,138,71,39,152,71,46,62,78,156,75,80,59,30,193,84,198,144,92,12,210,123,76,191,115,188,46,227,94,96,115,2,64,31,130,180,198,197,75,195,12,124,2,142,75,87,64,199,44,50,82,113,208,231,16,54,75,40,211,212,49,192,248,218,239,139,77,51,10,23,254,176,190,123,157,61,129,65,88,134,92,55,60,225,166,88,192,71,206,21,164,32,140,14,142,13,75,152,244,201,31,150,88,20,245,142,184,99,55,201,242,77,194,35,18,37,76,107,226,69,242,92,122,100,196,52,120,163,75,38,11,96,241,76,36,197,113,245,152,97,239,10,104,221,40,216,162,151,76,193,188,201,88,247,200,220,101,46,131,107,172,119,34,118,242,29,130,50,142,84,219,243,217,114,213,238,146,145,140,139,165,41,18,75,31,97,83,204,206,182,112,240,210,23,197,178,12,226,174,205,211,178,220,65,155,177,84,41,51,181,5,165,139,126,215,82,116,201,2,167,17,231,7,46,227,92,3,90,107,5,38,87,162,71,60,96,206,20,78,179,1,21,60,225,215,18,141,202,182,132,111,204,96,208,180,203,117,190,115,97,61,72,150,32,226,103,13,202,103,11,180,81,86,250,8,133,69,5,186,228,33,231,241,144,68,85,167,93,43,39,190,186,86,149,204,130,127,154,10,85,153,125,34,242,36,233,144,189,3,79,60,248,155,216,114,1,21,214,91,125,18,90,69,203,25,44,240,28,153,187,58,126,16,116,110,93,154,38,255,70,177,152,169,150,153,54,235,59,20,118,82,82,131,190,223,175,236,118,115,27,23,251,245,133,134,197,183,65,215,135,229,145,107,115,23,214,16,3,130,226,184,11,9,234,1,29,52,149,246,129,41,19,184,179,106,52,188,242,94,80,190,142,60,76,64,93,145,58,136,30,200,29,88,89,241,81,82,81,222,209,52,204,149,66,253,173,151,78,226,206,144,174,164,173,210,39,255,74,146,250,248,5,73,61,194,73,218,232,185,63,45,246,244,159,156,148,191,164,115,61,218,72,251,121,206,27,3,48,230,34,30,21,147,56,56,97,125,97,122,134,180,106,214,144,206,84,12,106,84,4,105,233,33,253,1,241,127,105,168,0,223,16,124,84,86,60,122,215,157,255,110,116,252,8,236,36,138,26,38,82,87,135,228,159,202,124,94,198,26,189,243,82,250,134,223,224,5,95,190,229,206,118,94,252,33,191,1,237,45,10,144,228,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ddfbfbad-129c-41c8-9c0d-cc46e8050670"));
		}

		#endregion

	}

	#endregion

}
