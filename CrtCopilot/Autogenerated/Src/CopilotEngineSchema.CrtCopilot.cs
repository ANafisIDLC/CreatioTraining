﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotEngineSchema

	/// <exclude/>
	public class CopilotEngineSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotEngineSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotEngineSchema(CopilotEngineSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("db5a80f6-ea66-4f1e-9a0c-14f8f087d1e7");
			Name = "CopilotEngine";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,26,219,110,227,184,245,57,11,236,63,112,82,96,87,70,93,161,237,99,178,25,35,113,146,93,3,147,153,193,56,211,65,209,22,1,35,209,182,26,89,244,138,84,18,99,54,255,222,115,120,145,72,138,146,51,131,190,36,17,121,120,120,238,55,166,162,91,38,118,52,99,228,150,213,53,21,124,37,211,57,175,86,197,186,169,169,44,120,5,95,187,162,228,242,199,31,190,254,248,195,81,35,138,106,77,150,123,33,217,246,52,248,6,200,178,100,25,30,18,233,175,172,98,117,145,245,96,222,21,213,239,221,162,123,231,118,203,171,248,142,75,13,224,61,95,196,193,20,153,35,91,233,185,166,109,12,228,134,73,154,83,73,227,48,53,27,90,79,207,119,187,178,200,104,203,252,16,145,0,122,121,49,184,117,77,51,201,235,130,69,105,188,170,64,160,155,45,171,100,186,168,36,171,87,160,53,145,206,55,84,130,240,118,37,195,187,191,247,92,250,137,253,222,48,33,191,251,98,64,32,118,192,187,75,250,186,228,247,180,60,57,209,186,77,223,241,245,26,150,97,31,32,254,117,201,86,180,41,229,69,81,229,176,152,200,253,142,241,85,178,48,138,184,170,0,148,77,38,255,1,208,2,239,172,104,73,178,146,10,65,60,8,114,66,252,35,0,255,85,93,112,244,167,154,173,129,48,128,175,132,164,149,20,39,228,99,93,60,82,201,244,254,78,127,144,12,247,137,144,117,103,165,31,107,224,75,146,51,114,252,79,222,252,92,51,66,201,61,151,228,105,195,73,205,4,47,31,153,32,146,138,7,65,248,138,200,13,35,141,96,117,74,142,201,159,17,241,209,241,53,175,13,32,226,220,243,134,100,180,34,57,39,43,240,16,254,4,139,39,29,240,223,82,114,46,30,20,10,216,175,9,205,243,2,37,10,12,23,21,44,108,149,81,157,118,7,254,158,146,207,130,17,14,220,155,235,87,77,165,77,27,190,168,36,20,40,222,213,252,177,200,89,78,158,10,185,129,229,66,0,69,74,197,228,126,79,230,53,67,172,100,87,82,137,87,164,255,174,90,244,192,50,28,42,75,114,207,200,134,149,59,139,3,228,36,217,179,4,162,200,127,5,200,85,147,230,112,173,137,42,247,132,238,224,118,16,47,74,151,74,16,236,125,35,65,98,43,144,42,41,36,145,32,7,208,122,75,53,161,240,145,179,21,170,179,144,130,236,104,13,65,9,116,46,78,90,220,151,188,250,89,146,45,125,0,140,66,52,160,29,197,46,189,231,13,234,5,152,126,164,101,131,106,65,166,154,53,80,137,215,88,185,56,84,162,172,81,204,96,76,117,177,50,46,75,138,21,232,88,169,192,74,9,4,70,183,247,16,120,120,35,210,227,211,65,139,153,211,234,146,61,178,146,239,140,29,162,139,128,181,125,216,49,29,178,208,140,134,128,142,79,141,173,178,42,215,230,234,219,238,117,193,202,124,200,112,65,135,185,146,247,2,60,139,220,149,240,227,140,192,159,55,180,162,107,176,199,95,153,68,151,99,117,114,108,110,61,158,156,70,17,128,230,106,112,147,74,7,111,114,215,120,223,241,51,11,21,228,186,0,176,100,245,99,145,49,112,157,231,61,185,203,194,245,1,36,134,176,37,19,2,96,13,229,228,78,120,223,227,103,77,228,210,172,146,187,218,253,28,63,121,35,214,16,196,128,205,114,9,242,199,195,89,124,99,28,205,92,59,198,69,83,148,6,137,251,125,64,195,42,58,213,13,134,125,212,115,115,15,89,196,168,89,253,237,135,187,36,208,148,175,168,233,184,82,122,58,153,42,143,56,26,80,66,22,91,157,14,11,111,64,118,193,37,129,176,124,89,77,7,148,234,233,116,66,190,42,148,129,149,130,237,71,204,246,168,111,137,0,24,183,206,163,192,236,20,96,68,6,45,226,184,28,206,134,36,209,158,243,36,112,70,122,246,130,80,30,203,0,212,55,235,151,113,195,2,157,67,4,146,80,75,12,132,15,47,18,45,179,13,219,82,112,60,149,255,244,218,233,33,232,165,3,76,206,222,250,167,201,108,70,18,127,229,12,226,89,149,187,167,146,201,228,244,32,85,86,29,177,53,184,53,102,12,233,23,94,63,168,178,54,245,224,63,234,172,168,98,163,89,250,101,248,198,183,201,228,128,247,66,185,184,225,131,1,218,247,43,157,116,153,249,74,172,25,155,52,34,252,194,195,21,210,44,53,203,32,81,183,62,209,150,242,72,107,2,37,188,0,130,5,28,172,216,19,121,87,8,105,217,186,209,91,111,205,109,71,254,114,122,13,152,52,206,196,165,96,162,128,95,186,27,140,103,152,11,124,198,146,80,248,243,166,174,129,110,140,85,233,34,159,182,228,77,162,110,150,158,231,121,98,150,12,68,205,100,83,87,246,82,215,218,173,104,127,109,138,156,44,233,35,51,129,98,1,149,82,114,9,59,183,197,150,205,32,55,211,90,78,73,183,0,250,155,66,154,131,251,108,157,10,209,2,190,166,54,141,67,177,203,33,254,220,115,14,101,151,184,166,69,201,242,78,69,128,13,88,215,191,65,11,22,111,250,158,63,105,138,1,63,0,224,207,232,54,138,48,111,218,122,32,41,121,181,158,36,8,254,23,141,117,146,254,3,235,151,244,150,75,90,222,64,245,85,8,6,113,33,23,221,249,186,227,212,87,131,35,2,171,229,37,226,68,50,44,213,26,189,137,197,87,200,43,146,171,120,214,107,234,226,91,254,192,42,161,34,41,200,102,150,186,139,192,215,95,13,172,182,145,16,216,91,117,160,187,108,20,158,8,119,204,129,203,78,80,86,102,54,137,24,197,192,142,213,145,107,168,198,108,252,216,153,162,149,248,146,74,28,81,78,98,214,245,200,193,186,126,131,178,180,100,29,141,214,112,18,191,241,105,237,41,235,45,77,195,8,96,173,220,168,9,138,206,164,127,10,228,178,225,144,147,64,80,160,230,166,44,45,184,225,79,243,250,162,126,70,61,29,10,228,66,117,60,55,93,88,128,120,119,30,46,127,129,170,30,202,231,91,48,249,57,45,75,17,161,197,248,163,161,27,61,213,30,78,122,183,24,88,204,117,118,233,150,207,203,2,195,188,231,222,49,97,71,79,5,210,243,147,177,149,138,27,255,110,249,82,59,162,15,154,90,204,233,151,13,171,89,98,192,49,121,188,49,127,167,11,1,71,165,189,122,2,166,143,178,77,12,83,168,41,255,18,56,240,30,116,243,161,190,2,163,223,67,30,27,86,18,82,104,8,66,211,249,168,131,137,227,192,118,53,184,98,26,114,60,94,120,164,174,12,147,224,66,115,54,224,1,250,212,43,154,109,92,129,196,229,1,244,66,145,202,162,250,3,35,144,80,167,70,77,241,85,102,103,194,196,107,189,202,74,250,213,182,223,71,97,61,76,223,108,172,162,182,87,130,20,236,223,214,114,82,85,182,226,252,67,188,231,210,87,188,65,178,100,56,251,242,176,56,42,54,120,146,16,49,228,159,135,98,215,202,226,68,139,217,226,244,141,208,132,183,30,139,7,34,88,139,220,72,151,229,73,84,116,18,224,44,202,215,68,46,23,254,27,188,33,22,75,92,84,78,24,177,245,197,88,244,136,213,165,253,42,211,144,179,240,202,187,5,0,196,170,191,183,56,60,104,191,16,10,140,40,82,30,98,17,137,187,34,177,250,186,46,106,33,63,212,102,180,149,20,234,40,160,195,193,231,66,77,161,160,32,189,221,239,24,134,118,239,102,92,76,53,205,190,182,67,82,102,45,162,152,52,22,87,85,179,101,53,189,47,89,156,51,20,141,30,199,153,9,68,130,149,212,140,100,186,100,211,139,139,220,13,174,154,2,197,232,65,57,96,222,111,43,208,87,74,251,173,181,111,85,123,101,237,164,196,16,8,119,134,245,229,229,197,146,1,193,133,220,235,174,24,9,152,211,234,234,25,86,37,107,7,47,54,176,28,26,208,76,21,201,113,28,31,204,160,201,152,243,209,237,166,230,79,87,207,25,83,235,139,21,68,131,107,222,168,156,179,162,165,96,26,236,37,166,67,37,34,63,88,60,163,117,60,183,26,157,120,241,200,108,42,115,121,51,108,46,228,167,159,0,234,243,34,71,160,64,141,184,103,8,79,158,83,40,10,101,35,122,166,167,151,213,112,252,145,89,240,163,63,254,32,135,78,44,172,92,113,50,140,87,245,116,55,137,186,108,196,72,245,100,30,135,239,40,37,157,55,244,228,206,174,189,194,80,169,135,36,214,12,5,215,88,195,139,238,118,143,25,166,55,59,239,161,247,155,52,231,117,65,7,200,248,177,55,186,168,67,121,69,1,98,41,198,154,95,192,33,198,208,79,180,130,180,18,197,52,233,21,33,174,236,66,249,234,34,113,62,6,146,132,194,215,23,12,82,53,122,95,144,212,124,28,223,111,54,227,12,104,27,42,2,227,65,101,217,181,3,153,236,181,38,245,226,26,150,151,156,10,59,11,137,69,82,12,207,54,26,92,236,193,169,59,186,84,3,103,176,143,16,96,36,137,234,44,124,195,156,13,148,19,6,222,141,220,163,188,5,106,209,197,4,22,25,151,56,194,87,79,23,186,152,128,42,226,178,80,40,104,189,255,69,247,217,83,178,64,80,29,102,121,109,170,14,186,219,193,222,4,245,231,35,178,197,97,92,111,7,179,93,230,102,58,51,126,242,179,95,225,155,242,43,108,172,31,101,98,193,42,192,139,222,151,24,153,120,28,159,121,83,25,100,30,218,104,168,76,5,87,105,53,148,198,93,56,240,13,168,153,250,44,251,154,142,17,16,45,169,130,74,92,191,135,232,233,85,111,61,108,210,76,173,54,37,195,102,225,23,240,112,89,91,130,58,115,44,91,38,218,178,208,79,156,91,177,86,205,138,88,131,81,119,52,157,239,10,91,104,15,212,208,186,23,11,121,51,221,88,148,111,227,254,78,63,97,169,108,39,39,192,19,54,72,74,186,102,141,109,85,5,209,212,56,129,193,120,31,153,83,244,232,136,186,215,161,161,214,64,223,84,183,221,146,49,168,190,230,226,125,151,230,218,76,72,172,170,2,34,128,167,254,140,235,0,33,88,199,245,230,238,193,35,178,29,204,24,101,121,156,70,239,180,150,109,68,163,4,82,123,179,139,87,244,69,131,38,124,128,35,59,174,58,24,227,182,214,219,71,26,215,206,244,71,34,66,72,120,47,28,180,164,117,76,108,93,79,63,26,108,9,91,163,38,99,221,150,233,245,19,119,104,218,117,178,206,226,156,231,76,197,115,53,107,84,211,217,182,106,38,204,77,188,12,95,90,213,179,85,7,176,134,207,162,253,12,83,112,226,111,167,159,232,211,149,158,222,6,27,87,45,37,110,82,182,88,156,30,188,53,0,101,148,237,177,244,115,245,80,241,167,74,45,140,117,159,237,88,199,237,90,199,59,232,146,103,15,36,9,22,67,63,51,19,92,140,31,202,184,157,239,211,111,156,154,248,199,48,12,186,202,83,99,98,212,94,170,202,158,83,207,6,45,76,73,133,116,224,195,217,218,59,218,133,217,163,255,103,85,112,22,171,11,236,245,243,104,73,58,16,213,98,145,127,40,175,181,14,164,115,150,35,184,162,155,66,171,158,207,108,201,122,223,182,137,135,135,160,40,163,86,199,173,114,167,209,121,215,217,112,12,239,113,212,98,31,28,95,199,230,212,1,105,47,208,202,201,108,67,98,62,11,116,251,110,127,103,52,212,121,58,107,137,112,68,133,131,45,187,44,177,139,110,239,2,165,66,44,234,132,23,121,166,137,78,241,102,169,130,180,72,221,55,18,188,48,124,29,138,73,219,188,1,249,12,181,207,63,22,115,248,96,245,121,151,195,233,214,4,23,42,233,152,139,91,17,234,95,97,196,110,173,42,166,133,94,97,246,13,175,123,158,119,154,58,195,237,89,134,70,205,78,166,112,35,128,255,229,198,207,3,207,206,221,139,232,224,191,50,120,209,18,31,9,109,205,102,18,72,166,103,173,83,98,58,126,47,142,42,213,170,128,232,197,40,243,111,5,237,156,221,124,250,15,40,241,136,236,69,70,253,36,227,95,8,105,87,168,238,75,205,56,194,77,253,110,167,154,246,176,101,236,46,8,45,8,27,145,139,61,180,119,113,116,94,190,82,163,4,139,41,120,17,234,110,8,30,151,99,19,87,109,182,70,52,137,47,169,105,248,111,43,254,104,196,26,86,211,105,139,156,5,179,109,245,150,140,234,76,140,2,7,31,143,18,7,141,1,114,130,167,49,218,193,1,240,120,116,82,157,150,239,207,78,65,50,20,168,240,159,167,116,185,208,173,141,56,207,136,27,14,164,69,242,226,56,218,16,121,125,47,51,142,163,170,86,91,171,233,94,83,141,50,122,214,216,22,97,186,47,180,163,132,207,176,227,185,139,198,161,243,173,14,65,77,137,69,63,254,58,232,45,175,54,102,231,241,204,28,153,169,145,162,59,207,52,192,106,217,204,32,199,30,15,52,119,154,80,243,38,163,254,57,6,191,251,227,202,128,77,51,183,108,139,94,125,203,204,30,111,83,206,108,70,142,63,60,28,235,237,19,187,125,229,214,75,8,98,170,67,173,64,194,51,53,238,202,143,251,35,154,232,19,139,83,66,105,223,181,73,162,123,97,237,233,208,103,252,80,73,239,63,232,196,202,250,32,136,171,213,151,255,1,170,91,90,230,18,46,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("db5a80f6-ea66-4f1e-9a0c-14f8f087d1e7"));
		}

		#endregion

	}

	#endregion

}
