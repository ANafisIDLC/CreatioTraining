﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmailRightsManagerSchema

	/// <exclude/>
	public class EmailRightsManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmailRightsManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmailRightsManagerSchema(EmailRightsManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ca6a9bdf-7ff1-48b1-8187-89a895317629");
			Name = "EmailRightsManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("79d5e1e4-18af-4001-8dc1-26f09fca92c2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,92,91,111,220,182,18,126,222,2,253,15,236,22,40,180,192,66,198,121,173,237,45,236,216,201,49,224,92,96,39,39,143,129,86,226,174,133,104,165,13,41,217,217,166,249,239,103,120,19,41,138,146,40,123,99,39,109,31,138,212,18,57,51,156,249,102,56,51,164,54,143,54,152,110,163,24,163,183,152,144,136,22,171,50,124,86,228,171,116,93,145,168,76,139,252,231,159,190,252,252,211,164,162,105,190,70,215,59,90,226,205,161,245,55,140,207,50,28,179,193,52,124,129,115,76,210,184,53,230,50,205,63,233,135,38,175,205,166,200,221,111,8,238,122,222,20,177,115,212,217,105,231,171,243,188,76,203,20,83,24,0,67,126,37,120,13,132,208,179,44,162,244,119,116,190,137,210,236,42,93,223,148,244,101,148,71,107,76,248,168,131,131,3,116,68,171,205,38,34,187,133,252,155,207,64,91,82,220,166,9,166,104,131,203,155,34,161,104,85,16,132,25,21,120,66,41,80,160,136,224,184,32,9,34,156,44,138,226,178,138,178,244,79,190,128,80,18,227,124,235,129,152,166,183,152,253,155,69,37,252,203,222,45,139,207,22,157,229,14,37,120,21,85,89,169,136,156,137,63,25,135,244,54,45,119,214,132,116,157,195,250,19,53,250,232,192,88,208,182,90,102,105,140,98,190,38,151,18,38,95,184,34,106,125,61,79,113,150,128,194,222,144,244,22,132,20,47,109,53,201,7,24,163,152,224,213,241,244,29,197,4,236,151,11,200,76,15,22,40,205,105,25,229,49,14,235,209,166,84,147,173,160,14,11,137,146,34,207,118,168,73,1,125,168,26,127,31,246,136,113,65,165,89,48,179,255,14,69,201,38,205,83,90,18,174,226,165,82,22,24,48,139,214,190,226,44,139,34,67,31,82,202,53,198,129,181,59,49,233,158,238,174,4,213,62,201,206,77,177,104,124,3,98,162,28,156,211,87,8,224,197,96,254,1,107,33,94,193,116,116,140,166,39,18,9,211,62,254,47,37,188,30,46,129,4,170,128,206,53,167,195,36,25,99,22,48,40,5,92,231,54,120,199,91,5,40,113,205,158,1,49,97,5,33,151,148,230,87,156,39,2,203,77,96,3,154,96,57,85,92,22,132,193,155,251,133,24,33,125,164,237,29,129,133,202,38,40,103,136,133,209,201,196,194,42,152,167,5,94,54,202,3,76,173,169,16,238,174,113,92,17,152,113,158,175,211,28,67,48,46,47,168,160,33,236,224,166,20,216,160,153,73,41,58,44,9,156,63,120,176,54,213,173,39,7,83,137,180,235,93,30,95,227,178,4,204,208,169,226,216,101,46,7,75,115,93,210,4,124,193,50,150,156,242,149,180,151,22,130,153,28,96,152,76,190,246,35,226,165,136,236,62,177,14,86,165,240,188,170,178,172,137,225,57,186,187,193,57,2,101,17,0,59,55,33,74,213,240,168,2,38,164,3,225,252,201,54,34,209,134,187,229,241,84,69,248,233,194,136,174,181,179,155,113,245,232,128,207,107,56,202,109,145,38,76,212,19,206,211,84,71,112,46,131,163,36,165,176,251,162,130,25,92,208,139,4,12,162,94,135,160,17,38,36,164,1,213,38,255,95,148,85,88,88,19,136,11,55,49,105,203,249,115,4,182,122,14,218,17,143,159,23,228,153,208,8,243,162,96,54,51,77,226,84,114,191,150,141,13,184,184,131,140,228,113,85,250,154,177,220,175,46,111,35,34,86,34,222,152,83,132,11,132,175,245,91,49,37,93,161,160,49,229,24,229,160,40,37,193,132,224,178,34,114,236,215,38,147,166,76,96,169,183,187,45,78,12,161,142,152,252,11,147,252,204,98,122,145,132,23,244,85,1,8,216,150,59,48,168,226,58,18,20,69,94,130,28,138,164,196,133,16,183,15,29,6,56,44,239,19,217,160,157,84,69,84,165,81,10,64,20,151,190,160,225,124,94,138,60,239,44,42,163,6,120,206,237,151,190,32,114,121,164,205,169,3,77,246,176,30,11,214,224,190,72,84,16,30,180,144,164,44,141,68,138,141,140,232,65,75,188,97,55,126,84,67,221,207,187,91,100,164,44,160,177,197,149,37,94,149,167,159,42,140,160,22,0,131,173,82,8,60,99,77,172,100,4,77,51,163,214,188,30,18,56,136,218,67,107,106,224,155,210,49,133,87,254,209,31,142,197,160,223,145,181,171,191,79,97,235,168,202,203,162,248,88,109,105,160,101,245,1,146,16,106,24,33,207,32,163,43,89,105,165,234,31,177,152,12,210,24,179,170,184,198,172,6,101,70,4,3,144,157,54,37,242,4,71,25,45,51,204,82,4,176,170,96,193,159,136,20,216,23,15,134,64,174,52,199,128,216,0,84,56,19,17,161,233,194,103,153,71,7,106,180,137,52,49,156,217,237,178,136,84,46,198,159,5,50,93,175,151,221,5,56,65,22,229,248,78,82,11,172,76,76,162,99,18,10,236,5,6,197,41,84,255,60,231,124,151,167,37,139,48,61,67,95,111,177,40,231,123,71,241,37,92,226,91,156,245,14,123,83,208,212,164,21,178,48,165,71,204,66,6,221,255,166,57,0,146,45,236,85,113,89,196,31,217,223,176,83,201,25,239,111,48,193,77,222,28,199,108,25,204,125,62,65,253,30,8,214,225,27,102,55,92,130,171,104,245,205,88,172,18,26,27,196,56,51,14,132,193,207,105,92,138,160,103,167,50,86,241,191,130,213,72,12,2,42,90,0,62,88,248,70,68,3,244,170,111,32,131,241,119,230,2,151,204,221,139,149,191,142,58,28,130,209,57,50,3,18,55,29,93,32,237,31,12,42,103,75,111,255,224,1,22,83,166,186,99,238,37,93,44,130,153,17,145,205,218,72,248,232,177,211,75,13,246,154,179,68,232,107,146,96,114,186,59,161,113,191,35,117,13,212,78,98,65,85,182,204,2,38,105,178,60,255,12,165,29,20,194,206,26,140,86,4,159,157,234,71,70,166,103,16,97,69,57,102,4,218,235,14,5,121,124,197,135,4,154,157,38,52,185,187,73,1,133,129,160,18,178,145,6,27,22,161,152,246,195,147,36,225,206,220,86,189,30,58,105,6,36,46,17,39,10,186,119,36,71,118,248,154,215,116,106,37,119,146,128,96,2,20,12,99,232,201,58,136,13,204,54,163,157,158,174,236,54,48,217,142,129,16,130,36,2,85,190,47,255,249,106,198,121,161,204,7,70,172,52,131,88,40,26,106,118,148,42,106,133,64,36,232,8,109,205,16,243,55,143,112,38,19,173,156,69,163,85,163,148,83,191,71,113,145,56,4,254,126,163,229,28,116,82,106,249,159,62,120,158,228,73,87,212,236,222,221,181,252,93,100,76,143,13,161,252,13,90,212,120,107,49,8,64,29,51,179,133,101,172,153,79,15,89,147,170,149,68,252,27,153,71,69,230,218,94,127,171,216,123,37,60,117,132,119,123,198,202,31,63,139,235,47,80,123,11,156,86,72,155,202,78,244,74,60,157,154,65,36,4,220,129,75,245,247,48,195,183,5,19,52,24,174,113,149,69,85,183,163,44,90,123,95,44,58,97,96,27,208,189,89,16,26,142,192,94,181,173,225,105,124,205,192,52,190,108,192,185,41,119,218,249,234,91,172,195,13,5,110,83,176,67,51,32,8,83,215,188,204,237,134,170,29,163,167,162,5,203,109,131,255,168,24,47,235,203,169,46,96,69,57,217,148,185,89,55,42,197,245,87,139,90,192,86,160,151,168,164,141,80,124,29,71,89,68,100,12,244,111,157,56,250,227,188,125,194,252,205,182,15,211,4,55,142,47,110,228,132,197,72,91,118,32,231,121,143,168,140,211,61,2,66,195,67,185,107,114,112,8,185,29,93,142,78,90,114,175,26,216,201,90,251,152,96,164,182,16,115,123,234,75,2,234,113,124,87,85,179,27,187,215,112,14,113,146,101,197,29,164,40,47,72,148,151,114,219,153,63,205,42,206,147,180,252,241,87,113,6,238,88,226,61,174,67,36,1,123,241,100,243,72,177,207,121,125,92,173,65,235,129,46,215,216,20,155,238,230,244,78,59,149,53,230,135,170,183,252,80,93,249,110,180,251,208,229,40,94,15,213,181,60,47,235,222,254,132,7,136,130,201,218,51,245,248,198,22,36,102,232,19,3,244,199,64,165,134,126,119,27,86,70,220,225,51,161,232,22,204,103,235,138,200,210,132,239,40,158,155,153,60,108,96,51,228,61,172,81,103,122,214,182,230,58,41,26,91,225,235,85,44,174,90,107,232,61,44,106,31,165,152,71,65,243,110,140,212,44,21,12,216,25,109,253,80,219,181,231,96,24,116,139,163,248,6,5,142,88,107,20,142,160,149,54,55,251,202,75,251,174,8,91,92,43,110,214,49,87,7,208,64,134,93,131,99,216,132,240,188,117,255,105,94,43,72,78,14,134,98,252,204,36,95,63,157,163,174,137,92,180,198,36,253,88,49,237,188,215,50,71,37,169,176,121,170,61,49,217,212,199,123,242,207,189,221,130,57,52,88,233,155,130,199,22,191,80,132,82,49,172,149,36,11,26,245,1,228,187,109,18,177,102,129,1,16,89,4,171,51,63,255,58,40,147,117,226,152,156,146,138,83,145,174,222,33,53,230,191,32,5,148,131,140,202,154,255,159,111,80,112,208,168,75,218,30,81,5,19,135,196,195,133,242,40,5,116,108,30,23,231,121,181,1,24,47,51,217,61,97,209,153,5,100,94,232,138,117,4,237,65,237,197,246,55,237,204,162,132,135,152,54,129,206,88,99,118,62,164,27,200,198,30,195,156,110,242,245,149,108,103,32,68,154,195,27,251,92,176,227,16,210,81,195,93,228,87,69,134,167,254,167,131,141,217,108,174,40,247,242,86,165,71,29,218,120,196,230,158,161,197,253,118,245,70,245,232,246,223,1,187,87,156,8,209,243,52,203,32,33,187,3,43,139,11,120,176,96,216,221,34,150,159,195,243,174,16,210,58,186,112,166,27,214,93,31,235,2,203,227,222,41,218,251,1,67,67,196,207,219,44,141,211,242,117,158,237,166,11,8,40,42,149,73,240,10,182,245,132,101,3,103,167,136,95,198,229,23,119,247,28,237,208,216,112,199,188,186,206,72,213,157,165,142,155,85,115,52,148,39,24,205,101,113,215,216,212,71,227,182,78,221,54,28,121,53,171,231,162,44,139,175,142,203,60,118,88,117,7,103,125,217,143,226,60,57,17,168,231,26,226,129,9,164,108,245,66,187,174,2,207,205,19,30,94,1,235,35,18,125,96,195,23,77,89,28,241,98,214,211,120,237,96,194,212,241,139,75,255,147,126,214,61,111,239,209,225,237,81,172,168,183,236,77,215,169,254,80,110,112,132,128,132,16,63,200,214,74,114,103,131,154,117,115,235,91,172,47,207,186,43,217,20,92,110,135,52,170,216,116,55,163,240,36,223,5,96,54,49,4,254,13,121,83,148,178,89,51,125,83,112,50,97,255,121,220,194,46,74,144,24,39,30,187,68,125,189,90,214,128,86,245,184,169,32,250,44,241,208,69,194,250,50,86,188,120,11,57,251,209,65,188,16,87,185,61,105,207,17,204,92,193,130,197,212,162,4,149,221,165,180,125,115,75,46,12,221,166,132,125,35,36,130,203,43,140,19,103,17,104,117,84,60,63,67,25,232,160,220,224,248,99,187,2,231,11,229,123,141,173,208,129,15,120,220,187,219,61,110,97,118,218,192,91,84,97,133,44,242,182,2,215,254,11,85,161,94,8,237,54,118,13,203,2,252,89,168,67,164,130,121,171,6,67,191,253,38,7,247,236,1,236,185,145,179,74,90,74,91,252,44,153,134,92,38,54,242,221,152,34,235,30,217,75,19,221,181,181,223,51,19,168,33,121,81,34,186,197,49,219,165,217,53,79,201,77,116,227,238,217,178,252,70,153,81,13,167,1,15,236,107,191,117,94,134,246,185,178,253,116,153,65,239,190,102,238,102,122,188,255,205,223,127,83,247,239,48,117,223,115,178,109,251,200,227,167,221,237,179,132,110,118,109,62,70,246,206,55,229,127,4,114,89,106,108,149,103,250,43,10,30,70,64,62,136,211,75,182,165,199,89,149,96,239,187,35,255,44,212,247,163,253,92,86,34,223,53,234,117,227,217,251,203,71,227,51,216,238,143,121,132,134,49,97,102,231,171,18,95,92,170,98,14,20,13,106,4,49,64,15,46,56,71,58,17,108,230,23,93,201,34,229,25,71,231,135,220,226,139,252,26,214,244,99,186,53,64,253,222,149,60,70,77,242,230,215,73,160,54,45,75,223,26,21,131,122,173,70,37,32,98,128,89,13,204,89,24,16,201,40,42,97,207,167,22,84,205,5,155,43,97,75,241,253,190,229,158,159,54,138,207,157,213,33,148,185,204,174,79,27,89,6,210,83,174,64,214,219,74,167,107,18,117,154,162,143,21,12,142,144,37,113,149,141,255,8,208,89,157,133,93,49,215,29,82,249,76,192,3,4,239,132,117,110,213,5,98,188,217,178,104,251,84,104,117,9,43,217,24,39,207,81,190,83,187,129,196,176,153,144,43,126,138,209,154,221,80,144,71,214,122,33,61,7,243,35,238,11,237,233,107,201,38,46,77,140,141,72,194,121,223,168,27,171,61,39,162,246,215,123,45,14,99,190,124,116,247,14,6,162,163,125,183,243,155,193,206,150,65,223,18,61,88,216,0,26,242,141,71,255,64,115,111,247,88,199,1,110,232,43,206,1,224,161,191,254,66,191,120,68,201,97,92,106,65,70,212,104,14,104,118,124,98,175,94,91,63,92,240,237,66,224,99,108,114,242,23,17,190,253,38,231,254,245,133,122,220,97,61,202,252,65,1,235,245,224,46,88,183,123,70,157,165,179,34,103,206,62,228,121,242,154,229,201,235,14,147,222,64,154,238,217,110,26,109,9,187,59,41,240,234,83,114,119,150,28,2,91,254,117,7,228,94,94,55,85,247,84,159,140,104,99,254,160,184,254,161,107,241,31,212,39,154,133,249,247,228,27,157,45,3,95,31,177,170,119,241,212,122,216,248,153,59,199,189,105,223,95,185,75,64,14,68,203,130,240,204,160,32,86,98,64,138,187,225,159,151,115,113,183,127,94,238,141,40,158,83,236,211,124,232,65,80,79,138,231,246,40,41,41,207,221,172,59,228,95,208,26,151,135,204,71,15,81,111,120,170,117,209,232,81,241,95,226,185,101,189,252,126,214,236,107,73,141,180,123,48,229,182,64,25,191,156,62,142,173,113,171,253,30,124,183,234,3,185,113,76,235,239,234,28,44,61,160,13,207,254,15,21,204,82,40,202,82,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ca6a9bdf-7ff1-48b1-8187-89a895317629"));
		}

		#endregion

	}

	#endregion

}
